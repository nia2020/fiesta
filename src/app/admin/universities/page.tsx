import Link from "next/link";
import { prisma } from "@/lib/db";

export default async function AdminUniversitiesPage() {
  const universities = await prisma.university.findMany({
    orderBy: { name: "asc" },
    include: {
      _count: { select: { festivals: true } },
    },
  });

  return (
    <div>
      <h1 className="mb-10 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">大学管理</h1>
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
        {universities.length > 0 ? (
          <ul className="divide-y divide-[var(--border)]">
            {universities.map((u) => (
              <li key={u.id} className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p className="text-base font-medium text-[var(--foreground)]">{u.name}</p>
                  <p className="mt-0.5 text-base text-[var(--muted)]">
                    /{u.slug} · 学祭 {u._count.festivals}件
                  </p>
                </div>
                <Link
                  href={`/admin/universities/${u.id}`}
                  className="shrink-0 text-base font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
                >
                  編集 →
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-12 text-center text-base text-[var(--muted)]">
            大学はまだ登録されていません
          </p>
        )}
      </div>
    </div>
  );
}
