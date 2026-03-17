import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { ThemeForm } from "./ThemeForm";

export default async function AdminThemeEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const festival = await prisma.festival.findUnique({
    where: { id },
    include: { university: true, theme: true },
  });

  if (!festival) notFound();

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-[var(--foreground)]">
        {festival.university.name} {festival.year}年度 テーマ編集
      </h1>
      <ThemeForm festival={festival} />
    </div>
  );
}
