import Link from "next/link";
import { prisma } from "@/lib/db";

export default async function AdminChairpersonsPage() {
  const chairpersons = await prisma.chairperson.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: true,
      festival: { include: { university: true } },
    },
  });

  return (
    <div>
      <h1 className="mb-10 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">委員長管理</h1>
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
        {chairpersons.length > 0 ? (
          <ul className="divide-y divide-[var(--border)]">
            {chairpersons.map((c) => (
              <li key={c.id} className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p className="text-base font-medium text-[var(--foreground)]">
                    {c.user?.name ?? "—"}
                  </p>
                  <p className="mt-0.5 text-base text-[var(--muted)]">
                    {c.festival.university.name} {c.festival.year}年度
                  </p>
                </div>
                <Link
                  href={`/admin/festivals/${c.festivalId}/chairperson`}
                  className="shrink-0 text-base font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
                >
                  編集 →
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-12 text-center text-base text-[var(--muted)]">
            委員長はまだ登録されていません
          </p>
        )}
      </div>
    </div>
  );
}
