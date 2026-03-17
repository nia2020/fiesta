import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";

export default async function AdminFestivalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const festival = await prisma.festival.findUnique({
    where: { id },
    include: {
      university: true,
      chairperson: { include: { user: true } },
      theme: true,
      sponsorPlans: { orderBy: { displayOrder: "asc" } },
      festivalHighlights: { orderBy: { displayOrder: "asc" } },
    },
  });

  if (!festival) notFound();

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-[var(--foreground)]">
        {festival.university.name} {festival.year}年度 編集
      </h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
          <h2 className="mb-2 font-semibold text-[var(--foreground)]">委員長</h2>
          <p className="text-[var(--muted)]">
            {festival.chairperson?.user?.name ?? "未登録"}
          </p>
          <Link
            href={`/admin/festivals/${id}/chairperson`}
            className="mt-2 inline-block text-sm text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
          >
            編集 →
          </Link>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
          <h2 className="mb-2 font-semibold text-[var(--foreground)]">テーマ</h2>
          <p className="text-[var(--muted)]">
            {festival.theme?.themeName ?? "未登録"}
          </p>
          <Link
            href={`/admin/festivals/${id}/theme`}
            className="mt-2 inline-block text-sm text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
          >
            編集 →
          </Link>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
          <h2 className="mb-2 font-semibold text-[var(--foreground)]">見どころ</h2>
          <p className="text-[var(--muted)]">
            トップページ「注目です」に表示。{festival.festivalHighlights.length}件
          </p>
          <Link
            href={`/admin/festivals/${id}/highlights`}
            className="mt-2 inline-block text-sm text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
          >
            編集 →
          </Link>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
          <h2 className="mb-2 font-semibold text-[var(--foreground)]">協賛プラン</h2>
          <p className="text-[var(--muted)]">{festival.sponsorPlans.length}件</p>
          <Link
            href={`/admin/festivals/${id}/sponsor-plans`}
            className="mt-2 inline-block text-sm text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
          >
            編集 →
          </Link>
        </div>
      </div>
    </div>
  );
}
