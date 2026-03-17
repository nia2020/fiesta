import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const festival = await prisma.festival.findUnique({
    where: { id },
    include: { university: true },
  });
  if (!festival) return NextResponse.json(null, { status: 404 });

  const allChairs = await prisma.chairperson.findMany({
    where: {
      festival: { universityId: festival.universityId },
    },
    include: { user: true },
  });
  const chairMap = new Map(allChairs.map((c) => [c.id, c]));

  const chain: Array<{
    chairperson: { id: string; name: string | null; handoverDate: Date | null; handoverComment: string | null };
    predecessor?: { name: string | null };
  }> = [];
  let current: (typeof allChairs)[0] | undefined = allChairs.find((c) => c.festivalId === id);
  while (current) {
    const pred = current.predecessorId
      ? chairMap.get(current.predecessorId)
      : null;
    chain.unshift({
      chairperson: {
        id: current.id,
        name: current.user?.name ?? null,
        handoverDate: current.handoverDate,
        handoverComment: current.handoverComment,
      },
      predecessor: pred ? { name: pred.user?.name ?? null } : undefined,
    });
    current = pred ?? undefined;
  }
  return NextResponse.json({
    festival: { id: festival.id, year: festival.year, university: festival.university },
    chain,
  });
}
