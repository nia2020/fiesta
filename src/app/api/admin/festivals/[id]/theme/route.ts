import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { z } from "zod";

const schema = z.object({
  themeName: z.string().min(1),
  eventDate: z.string().nullable(),
  eventEndDate: z.string().nullable(),
  venue: z.string().nullable(),
  details: z.string().nullable(),
  accessInfo: z.string().nullable(),
  schedule: z.string().nullable(),
});

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  try {
    const body = await req.json();
    const data = schema.parse(body);
    await prisma.theme.upsert({
      where: { festivalId: id },
      update: {
        themeName: data.themeName,
        eventDate: data.eventDate ? new Date(data.eventDate) : null,
        eventEndDate: data.eventEndDate ? new Date(data.eventEndDate) : null,
        venue: data.venue || null,
        details: data.details || null,
        accessInfo: data.accessInfo || null,
        schedule: data.schedule || null,
      },
      create: {
        festivalId: id,
        themeName: data.themeName,
        eventDate: data.eventDate ? new Date(data.eventDate) : null,
        eventEndDate: data.eventEndDate ? new Date(data.eventEndDate) : null,
        venue: data.venue || null,
        details: data.details || null,
        accessInfo: data.accessInfo || null,
        schedule: data.schedule || null,
      },
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json(
        { error: e.issues.map((x) => x.message).join(", ") },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "更新に失敗しました" },
      { status: 500 }
    );
  }
}
