import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";

export default async function ChairpersonPage({
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
        include: {
          chairperson: {
            include: {
              user: true,
              predecessor: { include: { user: true } },
            },
          },
        },
      },
    },
  });

  const festival = university?.festivals[0];
  const chairperson = festival?.chairperson;
  if (!university || !festival || !chairperson) notFound();

  const { user, predecessor } = chairperson;

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
        <span className="text-[var(--foreground)]">委員長紹介</span>
      </nav>

      <h1 className="mb-10 text-3xl font-bold text-[var(--foreground)]">
        {festival.year}年度 実行委員長
      </h1>

      <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
        <h2 className="mb-2 text-2xl font-semibold text-[var(--foreground)]">
          {user?.name ?? "—"}
        </h2>
        {user?.department && (
          <p className="mb-4 text-[var(--muted)]">{user.department}</p>
        )}
        {chairperson.message && (
          <div className="mb-6 rounded-lg bg-[var(--primary-muted)] p-4">
            <p className="text-[var(--foreground)]">{chairperson.message}</p>
          </div>
        )}
        {user?.bio && (
          <p className="text-[var(--muted)]">{user.bio}</p>
        )}
        {predecessor && (
          <div className="mt-6 border-t border-[var(--border)] pt-6">
            <p className="text-sm text-[var(--muted)]">
              前委員長: {predecessor.user?.name ?? "—"}
              {chairperson.handoverDate && (
                <>（{new Date(chairperson.handoverDate).toLocaleDateString("ja-JP")} 引き継ぎ）</>
              )}
            </p>
            {chairperson.handoverComment && (
              <p className="mt-2 text-sm text-[var(--muted)]">
                {chairperson.handoverComment}
              </p>
            )}
          </div>
        )}
      </article>

      <div className="mt-8">
        <Link
          href={`/universities/${slug}/festivals/${year}/succession`}
          className="font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
        >
          ← 引き継ぎ履歴を見る
        </Link>
      </div>
    </div>
  );
}
