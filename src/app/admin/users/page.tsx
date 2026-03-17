import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";

const roleLabels: Record<string, string> = {
  VIEWER: "閲覧者",
  MEMBER: "委員会メンバー",
  EXECUTIVE: "幹事",
  CHAIRPERSON: "委員長",
  SYSTEM_ADMIN: "システム管理者",
};

export default async function AdminUsersPage() {
  const session = await auth();
  if (!session?.user || session.user.role !== "SYSTEM_ADMIN") {
    redirect("/admin");
  }

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 className="mb-10 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">ユーザー管理</h1>
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
        {users.length > 0 ? (
          <ul className="divide-y divide-[var(--border)]">
            {users.map((u) => (
              <li key={u.id} className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <div>
                  <p className="text-base font-medium text-[var(--foreground)]">
                    {u.name ?? u.email}
                  </p>
                  <p className="mt-0.5 text-base text-[var(--muted)]">
                    {u.email} · {roleLabels[u.role] ?? u.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-12 text-center text-base text-[var(--muted)]">
            ユーザーはまだ登録されていません
          </p>
        )}
      </div>
    </div>
  );
}
