import Link from "next/link";
import { prisma } from "@/lib/db";

export default async function AdminSponsorPlansPage() {
  const plans = await prisma.sponsorPlan.findMany({
    orderBy: [{ festivalId: "asc" }, { displayOrder: "asc" }],
    include: {
      festival: { include: { university: true } },
    },
  });

  return (
    <div>
      <h1 className="mb-10 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">協賛プラン管理</h1>
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
        {plans.length > 0 ? (
          <ul className="divide-y divide-[var(--border)]">
            {plans.map((p) => (
              <li key={p.id} className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p className="text-base font-medium text-[var(--foreground)]">{p.planName}</p>
                  <p className="mt-0.5 text-base text-[var(--muted)]">
                    ¥{p.amount.toLocaleString()} ·{" "}
                    {p.festival.university.name} {p.festival.year}年度
                  </p>
                </div>
                <Link
                  href={`/admin/festivals/${p.festivalId}/sponsor-plans`}
                  className="shrink-0 text-base font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
                >
                  編集 →
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-12 text-center text-base text-[var(--muted)]">
            協賛プランはまだ登録されていません
          </p>
        )}
      </div>
    </div>
  );
}
