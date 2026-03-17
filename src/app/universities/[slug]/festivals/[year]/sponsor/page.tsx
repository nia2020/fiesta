import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";

export default async function SponsorPage({
  params,
}: {
  params: Promise<{ slug: string; year: string }>;
}) {
  const { slug, year } = await params;
  const yearNum = parseInt(year, 10);
  if (isNaN(yearNum)) notFound();

  const university = await prisma.university.findUnique({
    where: { slug },
    include: {
      festivals: {
        where: { year: yearNum, status: "published" },
      },
    },
  });

  const festival = university?.festivals[0];
  if (!university || !festival) notFound();

  const plans = await prisma.sponsorPlan.findMany({
    where: { festivalId: festival.id },
    orderBy: { displayOrder: "asc" },
  });

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
        <span className="text-[var(--foreground)]">協賛プラン</span>
      </nav>

      <h1 className="mb-10 text-3xl font-bold text-[var(--foreground)]">
        {festival.year}年度 協賛プラン
      </h1>

      {plans.length > 0 ? (
        <div className="space-y-6">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
            >
              <h2 className="mb-2 text-xl font-semibold text-[var(--foreground)]">
                {plan.planName}
              </h2>
              <p className="mb-4 text-2xl font-bold text-[var(--primary)]">
                ¥{plan.amount.toLocaleString()}
              </p>
              {plan.benefits && (
                <div className="whitespace-pre-wrap rounded-lg bg-[var(--primary-muted)] p-4 text-[var(--foreground)]">
                  {plan.benefits}
                </div>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center text-[var(--muted)]">
          協賛プランはまだ登録されていません
        </p>
      )}

      <div className="mt-12 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
        <h2 className="mb-2 text-lg font-semibold text-[var(--foreground)]">
          協賛のお問い合わせ
        </h2>
        <p className="mb-4 text-[var(--muted)]">
          協賛をご希望の方は、下記までお問い合わせください。
        </p>
        <a
          href={`mailto:sponsor@${university.slug}.example.com?subject=${festival.year}年度学園祭 協賛のお問い合わせ`}
          className="inline-block rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-white shadow-sm transition-all hover:bg-[var(--primary-hover)]"
        >
          お問い合わせはこちら
        </a>
      </div>
    </div>
  );
}
