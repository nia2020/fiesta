import { prisma } from "@/lib/db";
import Link from "next/link";

export default async function AdminDashboard() {
  const [universityCount, festivalCount, chairpersonCount] = await Promise.all([
    prisma.university.count(),
    prisma.festival.count(),
    prisma.chairperson.count(),
  ]);

  const recentFestivals = await prisma.festival.findMany({
    orderBy: { updatedAt: "desc" },
    take: 5,
    include: {
      university: true,
      chairperson: { include: { user: true } },
    },
  });

  return (
    <div>
      <h1 className="mb-10 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">ダッシュボード</h1>
      <div className="mb-12 grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
          <p className="mb-1 text-base font-medium text-[var(--muted)]">登録大学数</p>
          <p className="text-3xl font-bold text-[var(--foreground)]">{universityCount}</p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
          <p className="mb-1 text-base font-medium text-[var(--muted)]">学祭数</p>
          <p className="text-3xl font-bold text-[var(--foreground)]">{festivalCount}</p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
          <p className="mb-1 text-base font-medium text-[var(--muted)]">委員長登録数</p>
          <p className="text-3xl font-bold text-[var(--foreground)]">{chairpersonCount}</p>
        </div>
      </div>

      <section>
        <h2 className="mb-6 text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
          直近の学祭
        </h2>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
          {recentFestivals.length > 0 ? (
            <ul className="divide-y divide-[var(--border)]">
              {recentFestivals.map((f) => (
                <li key={f.id} className="flex items-center justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <p className="text-base font-medium text-[var(--foreground)]">
                      {f.university.name} {f.year}年度
                    </p>
                    <p className="mt-0.5 text-base text-[var(--muted)]">
                      {f.chairperson?.user?.name ?? "委員長未登録"} · {f.status}
                    </p>
                  </div>
                  <Link
                    href={`/admin/festivals/${f.id}`}
                    className="shrink-0 text-base font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
                  >
                    編集 →
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-12 text-center text-base text-[var(--muted)]">
              学祭はまだ登録されていません
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
