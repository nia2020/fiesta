import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { SponsorPlansForm } from "./SponsorPlansForm";

export default async function AdminSponsorPlansEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const festival = await prisma.festival.findUnique({
    where: { id },
    include: {
      university: true,
      sponsorPlans: { orderBy: { displayOrder: "asc" } },
    },
  });

  if (!festival) notFound();

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-[var(--foreground)]">
        {festival.university.name} {festival.year}年度 協賛プラン編集
      </h1>
      <SponsorPlansForm festival={festival} />
    </div>
  );
}
