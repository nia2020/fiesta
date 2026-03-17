import Link from "next/link";
import { prisma } from "@/lib/db";

export default async function AdminThemesPage() {
  const themes = await prisma.theme.findMany({
    include: {
      festival: { include: { university: true } },
    },
  });

  return (
    <div>
      <h1 className="mb-10 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">テーマ管理</h1>
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
        {themes.length > 0 ? (
          <ul className="divide-y divide-[var(--border)]">
            {themes.map((t) => (
              <li key={t.id} className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p className="text-base font-medium text-[var(--foreground)]">{t.themeName}</p>
                  <p className="mt-0.5 text-base text-[var(--muted)]">
                    {t.festival.university.name} {t.festival.year}年度
                  </p>
                </div>
                <Link
                  href={`/admin/festivals/${t.festivalId}/theme`}
                  className="shrink-0 text-base font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
                >
                  編集 →
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-12 text-center text-base text-[var(--muted)]">
            テーマはまだ登録されていません
          </p>
        )}
      </div>
    </div>
  );
}
