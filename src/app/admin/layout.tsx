import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) redirect("/login?callbackUrl=/admin");

  const role = session.user.role;
  const isAdmin =
    role === "SYSTEM_ADMIN" ||
    role === "EXECUTIVE" ||
    role === "CHAIRPERSON";

  if (!isAdmin) redirect("/mypage");

  const navItems = [
    { href: "/admin", label: "ダッシュボード" },
    { href: "/admin/universities", label: "大学管理" },
    { href: "/admin/chairpersons", label: "委員長管理" },
    { href: "/admin/themes", label: "テーマ管理" },
    { href: "/admin/sponsor-plans", label: "協賛プラン管理" },
    ...(role === "SYSTEM_ADMIN"
      ? [
          { href: "/admin/gakusai-offers", label: "取材オファー" },
          { href: "/admin/users", label: "ユーザー管理" },
        ]
      : []),
  ];

  return (
    <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav className="mb-10 flex flex-wrap gap-2 border-b border-[var(--border)] pb-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg px-4 py-3 text-base font-medium text-[var(--muted)] transition-colors hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
}
