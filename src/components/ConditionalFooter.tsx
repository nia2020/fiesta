"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function ConditionalFooter() {
  const pathname = usePathname();
  const isGakusaiArticle = pathname?.startsWith("/gakusai/");

  if (isGakusaiArticle) {
    return null;
  }

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--section-bg)] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Link href="/" className="font-bold text-[var(--foreground)] hover:text-[var(--primary)]">
            Fiesta
          </Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="text-[var(--muted)] hover:text-[var(--foreground)]">トップ</Link>
            <Link href="/universities" className="text-[var(--muted)] hover:text-[var(--foreground)]">大学一覧</Link>
          </nav>
        </div>
        <p className="mt-8 text-center text-sm text-[var(--muted)]">© Fiesta - 学園祭実行委員会サイト</p>
      </div>
    </footer>
  );
}
