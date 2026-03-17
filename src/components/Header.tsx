"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const navItems = [
  { href: "/", label: "祭ケデリックとは？" },
  { href: "/universities", label: "大学一覧" },
  { href: "/gakusai/interview", label: "取材について" },
];

export function Header() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background:
          "linear-gradient(to bottom, rgba(15,35,95,0.98) 0%, rgba(25,55,155,0.95) 100%)",
      }}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/saike_logo.png"
            alt="祭ケデリック"
            width={120}
            height={27}
            className="h-6 w-auto object-contain"
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href
                  ? "text-white"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          {status === "loading" ? (
            <span className="text-sm text-white/70">...</span>
          ) : session ? (
            <>
              <Link
                href="/mypage"
                className={`text-sm font-medium transition-colors ${
                  pathname === "/mypage"
                    ? "text-white"
                    : "text-white/90 hover:text-white"
                }`}
              >
                マイページ
              </Link>
              <Link
                href="/admin"
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                管理
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                ログイン
              </Link>
              <Link
                href="/login"
                className="rounded-lg bg-blue-400 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-300"
              >
                新規登録
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
