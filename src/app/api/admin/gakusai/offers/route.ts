import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { z } from "zod";
import { randomBytes } from "crypto";

const CreateOfferSchema = z.object({
  chairpersonName: z.string().min(1, "委員長名を入力してください"),
  university: z.string().min(1, "大学名を入力してください"),
  year: z.coerce.number().min(2000).max(2100),
});

export async function GET() {
  const session = await auth();
  if (!session?.user || session.user.role !== "SYSTEM_ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const offers = await prisma.gakusaiInterviewOffer.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(offers);
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user || session.user.role !== "SYSTEM_ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = CreateOfferSchema.safeParse(body);
  if (!parsed.success) {
    const msg = parsed.error.issues[0]?.message ?? "入力内容を確認してください";
    return NextResponse.json({ error: msg }, { status: 400 });
  }

  const token = randomBytes(24).toString("base64url");
  const offer = await prisma.gakusaiInterviewOffer.create({
    data: {
      inviteToken: token,
      chairpersonName: parsed.data.chairpersonName,
      university: parsed.data.university,
      year: parsed.data.year,
    },
  });

  const baseUrl = process.env.NEXTAUTH_URL ?? "http://localhost:3000";
  const inviteUrl = `${baseUrl}/gakusai/interview/${token}`;

  return NextResponse.json({
    offer: {
      id: offer.id,
      inviteToken: offer.inviteToken,
      chairpersonName: offer.chairpersonName,
      university: offer.university,
      year: offer.year,
      status: offer.status,
      inviteUrl,
    },
  });
}
