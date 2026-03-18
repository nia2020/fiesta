import Link from "next/link";
import { prisma } from "@/lib/db";
import { newsItems, sponsor } from "@/lib/news";

export default async function HomePage() {
  const [universities, newUniversities, highlights, gakusaiArticles] =
    await Promise.all([
    (async () => {
      try {
        return await prisma.university.findMany({
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
      } catch {
        return [];
      }
    })(),
    (async () => {
      try {
        return await prisma.university.findMany({
          orderBy: { createdAt: "desc" },
          take: 6,
          include: {
            festivals: {
              where: { status: "published" },
              orderBy: { year: "desc" },
              take: 1,
              include: {
                theme: true,
                chairperson: { include: { user: true } },
              },
            },
          },
        });
      } catch {
        return [];
      }
    })(),
    (async () => {
      try {
        return await prisma.festivalHighlight.findMany({
          where: { festival: { status: "published" } },
          orderBy: [{ displayOrder: "asc" }, { createdAt: "desc" }],
          take: 6,
          include: {
            festival: { include: { university: true } },
          },
        });
      } catch {
        return [];
      }
    })(),
    (async () => {
      try {
        return await prisma.gakusaiArticle.findMany({
          where: { status: "published" },
          orderBy: { publishedAt: "desc" },
          take: 6,
          include: { sections: { orderBy: { displayOrder: "asc" } } },
        });
      } catch {
        return [];
      }
    })(),
  ]);

  return (
    <div>
      {/* ヒーロー - 写真背景＋オーバーレイ（サウナイキタイ風の青系グラデーション） */}
      <section className="relative min-h-[620px] overflow-hidden border-b border-[var(--border)] sm:min-h-[720px] lg:min-h-[820px]">
        {/* 背景写真 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/hero-bg.png)" }}
        />
        {/* オーバーレイ（サウナイキタイ風の青系グラデーション） */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(15,35,95,0.94) 0%, rgba(25,55,155,0.92) 40%, rgba(37,99,235,0.9) 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[620px] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[720px] sm:px-6 sm:py-20 lg:min-h-[820px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/saike_logo.png"
            alt="祭ケデリック"
            width={320}
            height={72}
            className="mb-6 object-contain drop-shadow-lg"
          />
          <h1 className="mb-8 text-2xl font-bold text-white sm:text-3xl">
            全国の大学学園祭特集サイト
          </h1>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/universities"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 font-medium text-blue-700 transition-colors hover:bg-blue-50"
            >
              大学一覧から探す
            </Link>
          </div>
        </div>
      </section>

      {/* ニュースストリップ（ヒーロー直下） */}
      <section className="border-b border-[var(--border)] bg-gray-100 py-3">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 sm:flex-row sm:items-center sm:px-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {newsItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm text-[var(--foreground)] transition-colors hover:text-[var(--primary)]"
              >
                <span className="text-[var(--muted)]">{item.date}</span>{" "}
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-[var(--muted)]">
            <span>{sponsor.label}</span>
            <span className="font-medium text-blue-700">{sponsor.name}</span>
          </div>
        </div>
      </section>

      {/* 新着大学セクション（サウナイキタイの新着サ活風） */}
      <section className="border-b border-[var(--border)] bg-[var(--section-bg)] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6">
            <h2 className="mb-2 text-xl font-bold text-[var(--foreground)] sm:text-2xl">
              新着大学
            </h2>
            <p className="text-sm text-[var(--muted)]">
              最近登録された大学をチェックしよう
            </p>
          </div>
          {newUniversities.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {newUniversities.map((univ) => {
                const latestFest = univ.festivals[0];
                const imageUrl =
                  univ.coverImageUrl ?? univ.logoUrl ?? null;
                return (
                  <Link
                    key={univ.id}
                    href={`/universities/${univ.slug}`}
                    className="group block overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all hover:border-[var(--primary)]/40 hover:shadow-md"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/5">
                      {imageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={imageUrl}
                          alt={univ.name}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <span className="text-4xl font-bold text-[var(--primary)]/40">
                            {univ.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
                        {univ.name}
                      </h3>
                      {latestFest && (
                        <>
                          <p className="mt-1 text-sm text-[var(--muted)]">
                            {latestFest.year}年度
                            {latestFest.theme &&
                              `「${latestFest.theme.themeName}」`}
                          </p>
                          {latestFest.chairperson?.user && (
                            <p className="mt-1 text-sm text-[var(--muted)]">
                              委員長: {latestFest.chairperson.user.name ?? "—"}
                            </p>
                          )}
                        </>
                      )}
                      <p className="mt-2 text-xs text-[var(--muted-light)]">
                        {new Date(univ.createdAt).toLocaleDateString("ja-JP", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                        登録
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-[var(--border)] bg-[var(--card)] p-12 text-center">
              <p className="text-[var(--muted)]">
                登録されている大学はまだありません。
              </p>
            </div>
          )}
          {newUniversities.length > 0 && (
            <div className="mt-6 text-center">
              <Link
                href="/universities"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]"
              >
                大学一覧を見る →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 注目です - 各大学の学園祭見どころ */}
      <section className="border-b border-[var(--border)] bg-[var(--section-bg)] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 flex flex-wrap items-baseline gap-2">
            <h2 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
              注目です
            </h2>
            <p className="text-sm text-[var(--muted)]">
              各大学の学園祭見どころ
            </p>
          </div>
          {highlights.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((h) => (
                <Link
                  key={h.id}
                  href={`/universities/${h.festival.university.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-all hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
                    {h.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={h.imageUrl}
                        alt={h.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-4xl text-blue-300">
                        🎪
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-medium text-[var(--muted)]">
                      {h.festival.university.name} {h.festival.year}年度
                    </span>
                    <h3 className="mt-1 font-semibold text-[var(--foreground)] group-hover:text-blue-600">
                      {h.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--card)] py-16 text-center">
              <p className="text-[var(--muted)]">
                学園祭の見どころが登録されるとここに表示されます
              </p>
              <p className="mt-2 text-sm text-[var(--muted-light)]">
                管理画面の学祭編集から登録できます
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 参加大学セクション */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-xl font-bold text-[var(--foreground)] sm:text-2xl">
            参加大学
          </h2>
          <Link
            href="/universities"
            className="text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]"
          >
            大学一覧を見る →
          </Link>
        </div>

        {universities.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {universities.map((univ) => {
              const latestFest = univ.festivals[0];
              return (
                <Link
                  key={univ.id}
                  href={`/universities/${univ.slug}`}
                  className="group block rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:border-[var(--primary)]/40 hover:bg-[var(--card-hover)] sm:p-6"
                >
                  <h3 className="font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
                    {univ.name}
                  </h3>
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
        ) : (
          <div className="rounded-lg border border-dashed border-[var(--border)] bg-[var(--section-bg)] p-12 text-center">
            <p className="text-[var(--muted)]">
              登録されている大学はまだありません。
            </p>
          </div>
        )}
      </section>

      {/* 学祭がくれたもの - 学祭を終えた委員長の取材 */}
      <section id="gakusai" className="border-t border-[var(--border)] bg-[var(--section-bg)] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8">
            <h2 className="mb-2 text-xl font-bold text-[var(--foreground)] sm:text-2xl">
              学祭がくれたもの
            </h2>
            <p className="text-sm text-[var(--muted)]">
              学祭を終えた委員長への取材記事（オファー制）
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gakusaiArticles.map((article) => (
              <Link
                key={article.id}
                href={`/gakusai/${article.id}`}
                className="group block overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] transition-all hover:border-[var(--primary)]/40 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.thumbnailUrl}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-[var(--muted)]">
                    {article.university} {article.year}年度
                  </span>
                  <h3 className="mt-1 font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)]">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-[var(--muted)]">
                    {article.excerpt}
                  </p>
                  <p className="mt-3 text-sm font-medium text-[var(--foreground)]">
                    {article.chairpersonName}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm text-[var(--primary)]">
                    続きを読む
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
