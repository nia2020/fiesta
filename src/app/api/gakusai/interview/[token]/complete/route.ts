import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { generateArticleFromConversation } from "@/lib/interviewAi";
import { uploadImage } from "@/lib/upload";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;

  const offer = await prisma.gakusaiInterviewOffer.findUnique({
    where: { inviteToken: token },
  });

  if (!offer) {
    return NextResponse.json({ error: "招待リンクが無効です" }, { status: 404 });
  }
  if (offer.status === "completed" && offer.articleId) {
    return NextResponse.json({ articleId: offer.articleId }, { status: 200 });
  }

  const conversation = offer.conversation
    ? (JSON.parse(offer.conversation) as Array<{ role: "ai" | "user"; content: string }>)
    : [];

  if (conversation.length < 2) {
    return NextResponse.json(
      { error: "取材の会話が不足しています" },
      { status: 400 }
    );
  }

  const offerInfo = {
    chairpersonName: offer.chairpersonName,
    university: offer.university,
    year: offer.year,
  };

  const generated = await generateArticleFromConversation(conversation, offerInfo);

  let thumbnailUrl = "https://picsum.photos/seed/gakusai/400/250";
  const contentType = request.headers.get("content-type") ?? "";
  if (contentType.includes("multipart/form-data")) {
    try {
      const formData = await request.formData();
      const thumbnailFile = formData.get("thumbnail") as File | null;
      if (thumbnailFile && thumbnailFile.size > 0) {
        const { url } = await uploadImage(thumbnailFile, "thumb");
        thumbnailUrl = url;
      }
    } catch {
      // アップロード失敗時はデフォルト
    }
  }

  const article = await prisma.gakusaiArticle.create({
    data: {
      title: generated.title,
      excerpt: generated.excerpt,
      chairpersonName: offer.chairpersonName,
      university: offer.university,
      year: offer.year,
      thumbnailUrl,
      status: "published",
      publishedAt: new Date(),
      sections: {
        create: generated.sections.map((s, i) => ({
          heading: s.heading,
          content: s.content,
          displayOrder: i,
        })),
      },
    },
    include: { sections: true },
  });

  await prisma.gakusaiInterviewOffer.update({
    where: { id: offer.id },
    data: { status: "completed", articleId: article.id },
  });

  return NextResponse.json({
    articleId: article.id,
    message: "記事が作成されました",
  });
}
