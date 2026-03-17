import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { uploadImage } from "@/lib/upload";
import { generateArticle } from "@/lib/generateArticle";
import { z } from "zod";

const InterviewSchema = z.object({
  chairpersonName: z.string().min(1, "委員長名を入力してください"),
  university: z.string().min(1, "大学名を入力してください"),
  year: z.coerce.number().min(2000).max(2100),
  kikkake: z.string().min(10, "委員長を志したきっかけを詳しく入力してください"),
  konnan: z.string().min(10, "乗り越えた困難を詳しく入力してください"),
  takaramono: z.string().min(10, "学祭がくれたものについて入力してください"),
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const chairpersonName = formData.get("chairpersonName") as string;
    const university = formData.get("university") as string;
    const year = formData.get("year") as string;
    const kikkake = formData.get("kikkake") as string;
    const konnan = formData.get("konnan") as string;
    const takaramono = formData.get("takaramono") as string;

    const parsed = InterviewSchema.safeParse({
      chairpersonName,
      university,
      year,
      kikkake,
      konnan,
      takaramono,
    });

    if (!parsed.success) {
      const msg = parsed.error.issues[0]?.message ?? "入力内容を確認してください";
      return NextResponse.json({ error: msg }, { status: 400 });
    }

    const answers = parsed.data;

    // サムネイル写真をアップロード
    const thumbnailFile = formData.get("thumbnail") as File | null;
    let thumbnailUrl = "https://picsum.photos/seed/gakusai/400/250";

    if (thumbnailFile && thumbnailFile.size > 0) {
      const { url } = await uploadImage(thumbnailFile, "thumb");
      thumbnailUrl = url;
    }

    // セクション用の写真（任意）
    const sectionPhotos: string[] = [];
    for (let i = 0; i < 3; i++) {
      const file = formData.get(`photo${i}`) as File | null;
      if (file && file.size > 0) {
        const { url } = await uploadImage(file, `section${i}`);
        sectionPhotos.push(url);
      }
    }

    // AI で記事生成
    const generated = await generateArticle(answers);

    // DB に保存
    const article = await prisma.gakusaiArticle.create({
      data: {
        title: generated.title,
        excerpt: generated.excerpt,
        chairpersonName: answers.chairpersonName,
        university: answers.university,
        year: answers.year,
        thumbnailUrl,
        status: "published",
        publishedAt: new Date(),
        sections: {
          create: generated.sections.map((s, i) => ({
            heading: s.heading,
            content: s.content,
            imageUrl: sectionPhotos[i] ?? null,
            displayOrder: i,
          })),
        },
      },
      include: { sections: true },
    });

    return NextResponse.json({
      success: true,
      articleId: article.id,
      message: "記事が作成されました。管理者が公開すると一覧に表示されます。",
    });
  } catch (err) {
    console.error("[gakusai/interview]", err);
    let message = "記事の作成に失敗しました";
    if (err instanceof Error) {
      message = err.message;
      // Gemini API の生のエラーをユーザーに表示しない
      if (
        message.includes("429") ||
        message.includes("RESOURCE_EXHAUSTED") ||
        message.includes("quota") ||
        message.length > 200
      ) {
        message =
          "APIの利用制限に達しました。10〜15分ほど待ってから再度お試しください。";
      }
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
