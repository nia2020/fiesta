import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { z } from "zod";

const highlightSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1),
  description: z.string().nullable(),
  imageUrl: z.string().nullable(),
  displayOrder: z.number(),
});

const schema = z.object({
  highlights: z.array(highlightSchema),
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
    const { highlights } = schema.parse(body);

    await prisma.$transaction(async (tx) => {
      await tx.festivalHighlight.deleteMany({ where: { festivalId: id } });
      if (highlights.length > 0) {
        await tx.festivalHighlight.createMany({
          data: highlights.map((h) => ({
            festivalId: id,
            title: h.title,
            description: h.description,
            imageUrl: h.imageUrl,
            displayOrder: h.displayOrder,
          })),
        });
      }
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
