"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { University } from "@/generated/prisma";

export function UniversityForm({
  university,
}: {
  university: University & { festivals: { id: string; year: number }[] };
}) {
  const [name, setName] = useState(university.name);
  const [slug, setSlug] = useState(university.slug);
  const [description, setDescription] = useState(university.description ?? "");
  const [coverImageUrl, setCoverImageUrl] = useState(
    university.coverImageUrl ?? ""
  );
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch(`/api/admin/universities/${university.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        slug,
        description: description || null,
        coverImageUrl: coverImageUrl || null,
      }),
    });
    setSaving(false);
    if (res.ok) {
      router.refresh();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
          大学名
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
          URLスラッグ
        </label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          required
          className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
          カバー画像URL
        </label>
        <input
          type="url"
          value={coverImageUrl}
          onChange={(e) => setCoverImageUrl(e.target.value)}
          placeholder="https://..."
          className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
        />
        <p className="mt-1 text-xs text-[var(--muted)]">
          新着大学セクションのカード画像。空欄の場合はプレースホルダーを表示します。
        </p>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
          説明
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
        />
      </div>
      <button
        type="submit"
        disabled={saving}
        className="rounded-lg bg-[var(--primary)] px-6 py-2 font-medium text-white shadow-sm transition-all hover:bg-[var(--primary-hover)] disabled:opacity-50"
      >
        {saving ? "保存中..." : "保存"}
      </button>
    </form>
  );
}
