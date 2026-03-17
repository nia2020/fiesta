import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { ArticleTableOfContents } from "@/components/ArticleTableOfContents";

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = await prisma.gakusaiArticle.findUnique({
    where: { id },
    include: { sections: { orderBy: { displayOrder: "asc" } } },
  });
  if (!article) return { title: "記事が見つかりません" };
  return {
    title: `${article.title} | 学祭がくれたもの`,
    description: article.excerpt,
  };
}

export default async function GakusaiArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = await prisma.gakusaiArticle.findUnique({
    where: { id },
    include: { sections: { orderBy: { displayOrder: "asc" } } },
  });
  if (!article) notFound();

  const sections = article.sections.map((s) => ({
    id: s.id,
    heading: s.heading,
    content: s.content,
  }));

  const sidebarHeight = "calc(100vh - 3.5rem)";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0f2360]">
      <aside
        className="fixed left-0 top-14 z-10 hidden w-96 bg-[#0f2360] lg:flex"
        style={{
          height: sidebarHeight,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Link
          href="/#gakusai"
          className="flex flex-col items-end justify-center pr-1"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/saike_logo.png"
            alt="学祭がくれたもの"
            className="w-40 object-contain lg:w-52"
          />
          <p className="mt-3 text-right text-sm font-medium text-white/80">
            学祭がくれたもの
          </p>
        </Link>
      </aside>

      <div
        className="flex min-h-[calc(100vh-3.5rem)] justify-center px-4 py-12 sm:px-6 lg:ml-96 lg:mr-96 lg:pl-4 lg:pr-8"
      >
        <article className="w-full max-w-4xl flex-shrink-0 self-start bg-white px-6 py-12 sm:px-10 lg:pl-8 lg:pr-16">
          <div className="max-w-4xl">
            <Link
              href="/#gakusai"
              className="mb-6 inline-flex gap-1 text-sm text-[var(--muted)] transition-colors hover:text-[var(--primary)]"
            >
              ← 学祭がくれたもの一覧へ
            </Link>

            <header className="mb-10">
              <span className="text-sm font-medium text-[var(--muted)]">
                {article.university} {article.year}年度
              </span>
              <h1 className="mt-2 text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
                {article.title}
              </h1>
              <div className="mt-4 flex gap-4">
                <p className="font-medium text-[var(--foreground)]">
                  {article.chairpersonName}
                </p>
                {article.publishedAt && (
                  <time
                    dateTime={article.publishedAt.toISOString()}
                    className="text-sm text-[var(--muted)]"
                  >
                    {article.publishedAt.toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                )}
              </div>
            </header>

            <div className="mb-12 aspect-[16/10] w-full overflow-hidden rounded-xl bg-[var(--section-bg)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.thumbnailUrl}
                alt={article.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              {article.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28"
                >
                  <h2 className="mb-4 text-xl font-bold text-[var(--foreground)]">
                    {section.heading}
                  </h2>
                  {section.imageUrl && (
                    <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={section.imageUrl}
                        alt={section.heading}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <p className="leading-relaxed text-[var(--foreground)]">
                    {section.content}
                  </p>
                  <div className="my-8 border-b border-[var(--border)]" />
                </section>
              ))}
            </div>

            <footer className="mt-12 border-t border-[var(--border)] pt-8">
              <Link
                href="/#gakusai"
                className="inline-flex gap-1 font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]"
              >
                ← 他の記事を読む
              </Link>
            </footer>
          </div>
        </article>
      </div>

      {sections.length > 0 && (
        <aside
          className="fixed right-0 top-14 z-10 hidden w-96 bg-[#0f2360] lg:flex"
          style={{
            height: sidebarHeight,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div className="pl-4">
            <ArticleTableOfContents sections={sections} />
          </div>
        </aside>
      )}
    </div>
  );
}
