import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";

export default async function ThemePage({
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
          include: { theme: true },
        },
      },
    });
  } catch {
    notFound();
  }
  const festival = university?.festivals[0];
  const theme = festival?.theme;
  if (!university || !festival) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <nav className="mb-8 text-sm text-[var(--muted)]">
        <Link href="/" className="transition-colors hover:text-[var(--primary)]">トップ</Link>
        {" / "}
        <Link href={`/universities/${slug}`} className="transition-colors hover:text-[var(--primary)]">
          {university.name}
        </Link>
        {" / "}
        <Link
          href={`/universities/${slug}/festivals/${year}`}
          className="transition-colors hover:text-[var(--primary)]"
        >
          {festival.year}年度
        </Link>
        {" / "}
        <span className="text-[var(--foreground)]">テーマ・詳細</span>
      </nav>

      <h1 className="mb-10 text-3xl font-bold text-[var(--foreground)]">
        {festival.year}年度 学祭テーマ・詳細
      </h1>

      {theme ? (
        <article className="space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-[var(--foreground)]">
              {theme.themeName}
            </h2>
          </div>
          {(theme.eventDate || theme.venue) && (
            <div className="rounded-lg bg-[var(--primary-muted)] p-4">
              {theme.eventDate && (
                <p className="text-[var(--foreground)]">
                  開催日:{" "}
                  {new Date(theme.eventDate).toLocaleDateString("ja-JP")}
                  {theme.eventEndDate &&
                    ` ～ ${new Date(theme.eventEndDate).toLocaleDateString("ja-JP")}`}
                </p>
              )}
              {theme.venue && (
                <p className="mt-1 text-[var(--foreground)]">会場: {theme.venue}</p>
              )}
            </div>
          )}
          {theme.details && (
            <div>
              <h3 className="mb-2 font-semibold text-[var(--foreground)]">詳細</h3>
              <p className="whitespace-pre-wrap text-[var(--foreground)]">
                {theme.details}
              </p>
            </div>
          )}
          {theme.accessInfo && (
            <div>
              <h3 className="mb-2 font-semibold text-[var(--foreground)]">アクセス</h3>
              <p className="text-[var(--foreground)]">{theme.accessInfo}</p>
            </div>
          )}
          {theme.schedule && (
            <div>
              <h3 className="mb-2 font-semibold text-[var(--foreground)]">スケジュール</h3>
              <div className="whitespace-pre-wrap rounded-lg bg-[var(--primary-muted)] p-4 text-[var(--foreground)]">
                {theme.schedule}
              </div>
            </div>
          )}
        </article>
      ) : (
        <p className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center text-[var(--muted)]">
          テーマ・詳細は未登録です
        </p>
      )}
    </div>
  );
}
