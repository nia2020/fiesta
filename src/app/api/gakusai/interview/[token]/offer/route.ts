import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params;

    const offer = await prisma.gakusaiInterviewOffer.findUnique({
      where: { inviteToken: token },
    });

    if (!offer) {
      return NextResponse.json({ error: "招待リンクが無効または期限切れです" }, { status: 404 });
    }

  const conversation = offer.conversation
    ? (JSON.parse(offer.conversation) as Array<{ role: "ai" | "user"; content: string }>)
    : null;

  return NextResponse.json({
    chairpersonName: offer.chairpersonName,
    university: offer.university,
    year: offer.year,
    status: offer.status,
    conversation,
    articleId: offer.articleId,
  });
  } catch (err) {
    console.error("[gakusai/offer]", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "エラーが発生しました" },
      { status: 500 }
    );
  }
}
