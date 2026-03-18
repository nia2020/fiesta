import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";

export default async function FestivalPage({
  params,
}: {
  params: Promise<{ slug: string; year: string }>;
}) {
  const { slug, year } = await params;
  const yearNum = parseInt(year, 10);
  if (isNaN(yearNum)) notFound();

  let university;
  try {
    university = await prisma.university.findUnique({
      where: { slug },
      include: {
        festivals: {
          where: { year: yearNum, status: "published" },
          include: {
            chairperson: { include: { user: true } },
            theme: true,
          },
        },
      },
    });
  } catch {
    notFound();
  }
  const festival = university?.festivals[0];
  if (!university || !festival) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <nav className="mb-8 text-sm text-[var(--muted)]">
        <Link href="/" className="transition-colors hover:text-[var(--primary)]">トップ</Link>
        {" / "}
        <Link href={`/universities/${slug}`} className="transition-colors hover:text-[var(--primary)]">
          {university.name}
        </Link>
        {" / "}
        <span className="text-[var(--foreground)]">{festival.year}年度</span>
      </nav>

      <h1 className="mb-10 text-3xl font-bold text-[var(--foreground)]">
        {university.name} {festival.year}年度 学園祭
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Link
          href={`/universities/${slug}/festivals/${year}/chairperson`}
          className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-lg"
        >
          <h2 className="mb-2 text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
            委員長紹介
          </h2>
          <p className="text-sm text-[var(--muted)]">
            {festival.chairperson?.user?.name ?? "未登録"}
          </p>
        </Link>

        <Link
          href={`/universities/${slug}/festivals/${year}/theme`}
          className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-lg"
        >
          <h2 className="mb-2 text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
            学祭テーマ・詳細
          </h2>
          <p className="text-sm text-[var(--muted)]">
            {festival.theme?.themeName ?? "未登録"}
          </p>
        </Link>

        <Link
          href={`/universities/${slug}/festivals/${year}/succession`}
          className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-lg"
        >
          <h2 className="mb-2 text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
            引き継ぎ履歴
          </h2>
          <p className="text-sm text-[var(--muted)]">
            委員長の引き継ぎチェーンを表示
          </p>
        </Link>

        <Link
          href={`/universities/${slug}/festivals/${year}/sponsor`}
          className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-lg"
        >
          <h2 className="mb-2 text-lg font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
            協賛プラン
          </h2>
          <p className="text-sm text-[var(--muted)]">
            協賛プラン一覧とお問い合わせ
          </p>
        </Link>
      </div>
    </div>
  );
}
