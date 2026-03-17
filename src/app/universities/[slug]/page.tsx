import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";

export default async function UniversityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const university = await prisma.university.findUnique({
    where: { slug },
    include: {
      festivals: {
        where: { status: "published" },
        orderBy: { year: "desc" },
        include: {
          chairperson: { include: { user: true } },
          theme: true,
        },
      },
    },
  });

  if (!university) notFound();

  const latestFest = university.festivals[0];

  return (
    <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-14">
        <h1 className="mb-3 text-3xl font-bold leading-tight text-[var(--foreground)] sm:text-4xl">
          {university.name}
        </h1>
        {university.description && (
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--muted)]">{university.description}</p>
        )}
      </div>

      {latestFest && (
        <div className="mb-14 grid gap-8 md:grid-cols-2">
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
              委員長紹介
            </h2>
            {latestFest.chairperson ? (
              <div className="space-y-2">
                <p className="text-xl font-medium text-[var(--foreground)]">
                  {latestFest.chairperson.user?.name ?? "—"}
                </p>
                <p className="text-base text-[var(--muted)]">
                  {latestFest.chairperson.user?.department ?? ""}
                </p>
                {latestFest.chairperson.message && (
                  <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                    {latestFest.chairperson.message}
                  </p>
                )}
                <Link
                  href={`/universities/${slug}/festivals/${latestFest.year}/chairperson`}
                  className="mt-4 inline-block text-base font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
                >
                  詳細を見る →
                </Link>
              </div>
            ) : (
              <p className="text-base text-[var(--muted)]">委員長情報は未登録です</p>
            )}
          </section>

          <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm">
            <h2 className="mb-5 text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
              学祭テーマ
            </h2>
            {latestFest.theme ? (
              <div className="space-y-2">
                <p className="text-xl font-medium text-[var(--foreground)]">
                  {latestFest.theme.themeName}
                </p>
                {latestFest.theme.eventDate && (
                  <p className="text-base text-[var(--muted)]">
                    {new Date(latestFest.theme.eventDate).toLocaleDateString(
                      "ja-JP"
                    )}
                    {latestFest.theme.venue && ` @ ${latestFest.theme.venue}`}
                  </p>
                )}
                <Link
                  href={`/universities/${slug}/festivals/${latestFest.year}/theme`}
                  className="mt-4 inline-block text-base font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-hover)]"
                >
                  詳細を見る →
                </Link>
              </div>
            ) : (
              <p className="text-base text-[var(--muted)]">テーマは未登録です</p>
            )}
          </section>
        </div>
      )}

      <section className="mb-12">
        <h2 className="mb-5 text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
          年度別メニュー
        </h2>
        <div className="flex flex-wrap gap-3">
          {university.festivals.map((f) => (
            <Link
              key={f.id}
              href={`/universities/${slug}/festivals/${f.year}`}
              className="rounded-lg border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-base font-medium text-[var(--foreground)] transition-colors hover:border-[var(--primary)]/30 hover:bg-[var(--primary)]/5"
            >
              {f.year}年度
            </Link>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-4">
        {latestFest && (
          <>
            <Link
              href={`/universities/${slug}/festivals/${latestFest.year}/succession`}
              className="rounded-lg bg-[var(--primary)]/10 px-6 py-3 text-base font-medium text-[var(--primary)] transition-colors hover:bg-[var(--primary)]/20"
            >
              引き継ぎ履歴
            </Link>
            <Link
              href={`/universities/${slug}/festivals/${latestFest.year}/sponsor`}
              className="rounded-lg bg-[var(--primary)]/10 px-6 py-3 text-base font-medium text-[var(--primary)] transition-colors hover:bg-[var(--primary)]/20"
            >
              協賛プラン
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
