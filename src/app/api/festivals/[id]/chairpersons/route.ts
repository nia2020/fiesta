import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const chairperson = await prisma.chairperson.findUnique({
    where: { festivalId: id },
    include: {
      user: true,
      predecessor: { include: { user: true } },
    },
  });
  return NextResponse.json(chairperson);
}
