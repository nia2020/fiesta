import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";

export default async function SuccessionPage({
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
        },
      },
    });
  } catch {
    notFound();
  }
  const festival = university?.festivals[0];
  if (!university || !festival) notFound();

  let allChairs;
  try {
    allChairs = await prisma.chairperson.findMany({
      where: {
        festival: { universityId: university.id },
      },
      include: { user: true },
    });
  } catch {
    notFound();
  }
  const chairMap = new Map(allChairs.map((c) => [c.id, c]));

  const chain: Array<{
    chairperson: { name: string | null; handoverDate: Date | null; handoverComment: string | null };
    predecessor?: { name: string | null };
  }> = [];
  let current = allChairs.find((c) => c.festivalId === festival.id);
  while (current) {
    const pred = current.predecessorId ? chairMap.get(current.predecessorId) : undefined;
    chain.unshift({
      chairperson: {
        name: current.user?.name ?? null,
        handoverDate: current.handoverDate,
        handoverComment: current.handoverComment,
      },
      predecessor: pred ? { name: pred.user?.name ?? null } : undefined,
    });
    current = pred;
  }

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
        <span className="text-[var(--foreground)]">引き継ぎ履歴</span>
      </nav>

      <h1 className="mb-10 text-3xl font-bold text-[var(--foreground)]">
        委員長 引き継ぎ履歴
      </h1>

      {chain.length > 0 ? (
        <div className="space-y-4">
          {chain.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]/10 text-sm font-semibold text-[var(--primary)]">
                {chain.length - i}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[var(--foreground)]">
                  {item.chairperson.name ?? "—"}
                </p>
                {item.predecessor && (
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    前委員長: {item.predecessor.name ?? "—"}
                  </p>
                )}
                {item.chairperson.handoverDate && (
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    引き継ぎ日:{" "}
                    {new Date(item.chairperson.handoverDate).toLocaleDateString(
                      "ja-JP"
                    )}
                  </p>
                )}
                {item.chairperson.handoverComment && (
                  <p className="mt-2 rounded-lg bg-[var(--primary-muted)] p-3 text-sm text-[var(--foreground)]">
                    {item.chairperson.handoverComment}
                  </p>
                )}
              </div>
              {i < chain.length - 1 && (
                <div className="flex shrink-0 items-center text-[var(--primary)]/50">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center text-[var(--muted)]">
          引き継ぎ履歴はまだ登録されていません
        </p>
      )}
    </div>
  );
}
