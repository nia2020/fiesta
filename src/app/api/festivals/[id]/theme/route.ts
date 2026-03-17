import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const theme = await prisma.theme.findUnique({
    where: { festivalId: id },
  });
  return NextResponse.json(theme);
}
