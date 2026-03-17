import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const plans = await prisma.sponsorPlan.findMany({
    where: { festivalId: id },
    orderBy: { displayOrder: "asc" },
  });
  return NextResponse.json(plans);
}
