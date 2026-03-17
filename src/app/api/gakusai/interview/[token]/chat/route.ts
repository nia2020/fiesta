import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { generateNextQuestion } from "@/lib/interviewAi";

export async function POST(
  request: Request,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params;
    let body: { answer?: string } = {};
    try {
      body = await request.json();
    } catch {
      // 空の POST の場合は body を空のまま
    }
    const { answer } = body;

  const offer = await prisma.gakusaiInterviewOffer.findUnique({
    where: { inviteToken: token },
  });

  if (!offer) {
    return NextResponse.json({ error: "招待リンクが無効です" }, { status: 404 });
  }
  if (offer.status === "completed") {
    return NextResponse.json({ error: "この取材は完了しています" }, { status: 400 });
  }

  const conversation: Array<{ role: "ai" | "user"; content: string }> = offer.conversation
    ? (JSON.parse(offer.conversation) as Array<{ role: "ai" | "user"; content: string }>)
    : [];

  // ユーザーの回答を追加
  if (answer && typeof answer === "string" && answer.trim()) {
    conversation.push({ role: "user", content: answer.trim() });
  }

  const offerInfo = {
    chairpersonName: offer.chairpersonName,
    university: offer.university,
    year: offer.year,
  };

  const { question, isComplete } = await generateNextQuestion(conversation, offerInfo);

  // AI の質問を追加
  conversation.push({ role: "ai", content: question });

  await prisma.gakusaiInterviewOffer.update({
    where: { id: offer.id },
    data: {
      status: "in_progress",
      conversation: JSON.stringify(conversation),
    },
  });

  return NextResponse.json({
    question,
    isComplete,
    conversation,
  });
  } catch (err) {
    console.error("[gakusai/chat]", err);
    const msg =
      err instanceof Error ? err.message : "エラーが発生しました";
    const isQuota =
      msg.includes("429") ||
      msg.includes("quota") ||
      msg.includes("RESOURCE_EXHAUSTED");
    return NextResponse.json(
      {
        error: isQuota
          ? "APIの利用制限に達しました。しばらく待ってから再度お試しください。"
          : msg,
      },
      { status: 500 }
    );
  }
}
