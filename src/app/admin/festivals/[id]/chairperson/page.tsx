import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { ChairpersonForm } from "./ChairpersonForm";

export default async function AdminChairpersonEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const festival = await prisma.festival.findUnique({
    where: { id },
    include: {
      university: true,
      chairperson: {
        include: {
          user: true,
          predecessor: { include: { user: true } },
        },
      },
    },
  });

  if (!festival) notFound();

  const users = await prisma.user.findMany({
    orderBy: { name: "asc" },
  });

  const predecessorOptions = await prisma.chairperson.findMany({
    where: {
      festival: { universityId: festival.universityId },
      festivalId: { not: id },
    },
    include: { user: true },
  });

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-[var(--foreground)]">
        {festival.university.name} {festival.year}年度 委員長編集
      </h1>
      <ChairpersonForm
        festival={festival}
        users={users}
        predecessorOptions={predecessorOptions}
      />
    </div>
  );
}
