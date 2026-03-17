import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const university = await prisma.university.findUnique({
    where: { slug },
    include: {
      festivals: {
        where: { status: "published" },
        orderBy: { year: "desc" },
        include: {
          chairperson: { include: { user: true } },
          theme: true,
        },
      },
    },
  });
  if (!university) return NextResponse.json(null, { status: 404 });
  return NextResponse.json(university);
}
