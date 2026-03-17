import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { z } from "zod";

const schema = z.object({
  userId: z.string().nullable(),
  predecessorId: z.string().nullable(),
  handoverDate: z.string().nullable(),
  handoverComment: z.string().nullable(),
  message: z.string().nullable(),
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

    if (data.userId) {
      await prisma.chairperson.upsert({
        where: { festivalId: id },
        update: {
          userId: data.userId,
          predecessorId: data.predecessorId || null,
          handoverDate: data.handoverDate
            ? new Date(data.handoverDate)
            : null,
          handoverComment: data.handoverComment || null,
          message: data.message || null,
        },
        create: {
          festivalId: id,
          userId: data.userId,
          predecessorId: data.predecessorId || null,
          handoverDate: data.handoverDate
            ? new Date(data.handoverDate)
            : null,
          handoverComment: data.handoverComment || null,
          message: data.message || null,
        },
      });
    } else {
      await prisma.chairperson.deleteMany({ where: { festivalId: id } });
    }
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
