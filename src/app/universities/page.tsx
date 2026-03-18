import Link from "next/link";
import { prisma } from "@/lib/db";

const universitiesQuery = () =>
  prisma.university.findMany({
    orderBy: { name: "asc" },
    include: {
      festivals: {
        where: { status: "published" },
        orderBy: { year: "desc" },
        take: 1,
        include: {
          chairperson: { include: { user: true } },
          theme: true,
        },
      },
    },
  });

export default async function UniversitiesPage() {
  let universities: Awaited<ReturnType<typeof universitiesQuery>> = [];
  try {
    universities = await universitiesQuery();
  } catch {
    // DB接続不可時（本番でSQLite等）は空配列で表示
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="mb-10 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
        大学一覧
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {universities.map((univ) => {
          const latestFest = univ.festivals[0];
          return (
            <Link
              key={univ.id}
              href={`/universities/${univ.slug}`}
              className="group block rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:border-[var(--primary)]/40 hover:bg-[var(--card-hover)] sm:p-6"
            >
              <h2 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
                {univ.name}
              </h2>
              {univ.description && (
                <p className="mt-2 line-clamp-2 text-sm text-[var(--muted)]">
                  {univ.description}
                </p>
              )}
              {latestFest && (
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {latestFest.year}年度
                  {latestFest.theme && `「${latestFest.theme.themeName}」`}
                  {latestFest.chairperson && (
                    <> · 委員長: {latestFest.chairperson.user?.name ?? "—"}</>
                  )}
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
