import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const universities = await prisma.university.findMany({
    orderBy: { name: "asc" },
    include: {
      festivals: {
        where: { status: "published" },
        orderBy: { year: "desc" },
        take: 1,
        include: {
          chairperson: {
            include: { user: true },
          },
          theme: true,
        },
      },
    },
  });
  return NextResponse.json(universities);
}
