"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import type { User } from "@/generated/prisma";

export function MyPageForm({ user }: { user: User }) {
  const [name, setName] = useState(user.name ?? "");
  const [bio, setBio] = useState(user.bio ?? "");
  const [department, setDepartment] = useState(user.department ?? "");
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch("/api/mypage", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, bio, department }),
    });
    setSaving(false);
    if (res.ok) {
      router.refresh();
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-[var(--foreground)]">プロフィール編集</h2>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">メール</label>
            <p className="text-[var(--muted)]">{user.email}</p>
          </div>
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium text-[var(--foreground)]">氏名</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 transition-colors focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
            />
          </div>
          <div>
            <label htmlFor="department" className="mb-1 block text-sm font-medium text-[var(--foreground)]">所属学部・学科</label>
            <input
              id="department"
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 transition-colors focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
            />
          </div>
          <div>
            <label htmlFor="bio" className="mb-1 block text-sm font-medium text-[var(--foreground)]">自己紹介</label>
            <textarea
              id="bio"
              rows={4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2 transition-colors focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="mt-4 rounded-lg bg-[var(--primary)] px-6 py-2 font-medium text-white shadow-sm transition-all hover:bg-[var(--primary-hover)] disabled:opacity-50"
        >
          {saving ? "保存中..." : "保存"}
        </button>
      </form>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--card)]"
        >
          ログアウト
        </button>
        {(user.role === "SYSTEM_ADMIN" || user.role === "EXECUTIVE" || user.role === "CHAIRPERSON") && (
          <a
            href="/admin"
            className="rounded-lg bg-[var(--primary)]/10 px-4 py-2 text-sm font-medium text-[var(--primary)] transition-colors hover:bg-[var(--primary)]/20"
          >
            管理画面へ
          </a>
        )}
      </div>
    </div>
  );
}
