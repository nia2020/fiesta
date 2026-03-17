import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { z } from "zod";

const planSchema = z.object({
  id: z.string().optional(),
  planName: z.string().min(1),
  amount: z.number(),
  benefits: z.string().nullable(),
  displayOrder: z.number(),
});

const schema = z.object({
  plans: z.array(planSchema),
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
    const { plans } = schema.parse(body);

    await prisma.$transaction(async (tx) => {
      await tx.sponsorPlan.deleteMany({ where: { festivalId: id } });
      if (plans.length > 0) {
        await tx.sponsorPlan.createMany({
          data: plans.map((p) => ({
            festivalId: id,
            planName: p.planName,
            amount: p.amount,
            benefits: p.benefits,
            displayOrder: p.displayOrder,
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
