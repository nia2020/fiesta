import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { HighlightsForm } from "./HighlightsForm";

export default async function AdminHighlightsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const festival = await prisma.festival.findUnique({
    where: { id },
    include: {
      university: true,
      festivalHighlights: { orderBy: { displayOrder: "asc" } },
    },
  });

  if (!festival) notFound();

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-[var(--foreground)]">
        {festival.university.name} {festival.year}年度 見どころ編集
      </h1>
      <p className="mb-6 text-[var(--muted)]">
        トップページの「注目です」セクションに表示されます。学園祭の見どころを登録しましょう。
      </p>
      <HighlightsForm festival={festival} />
    </div>
  );
}
