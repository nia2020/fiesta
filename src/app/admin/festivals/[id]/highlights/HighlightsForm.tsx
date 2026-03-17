"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Highlight = {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string | null;
  displayOrder: number;
};

export function HighlightsForm({
  festival,
}: {
  festival: { id: string; festivalHighlights: Highlight[] };
}) {
  const [highlights, setHighlights] = useState<Highlight[]>(
    festival.festivalHighlights
  );
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  function addHighlight() {
    setHighlights([
      ...highlights,
      {
        id: `new-${Date.now()}`,
        title: "",
        description: "",
        imageUrl: "",
        displayOrder: highlights.length,
      },
    ]);
  }

  function removeHighlight(id: string) {
    setHighlights(highlights.filter((h) => h.id !== id));
  }

  function updateHighlight(
    id: string,
    field: keyof Highlight,
    value: string | number
  ) {
    setHighlights(
      highlights.map((h) => (h.id === id ? { ...h, [field]: value } : h))
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch(
      `/api/admin/festivals/${festival.id}/highlights`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          highlights: highlights.map((h, i) => ({
            id: h.id.startsWith("new-") ? undefined : h.id,
            title: h.title,
            description: h.description || null,
            imageUrl: h.imageUrl || null,
            displayOrder: i,
          })),
        }),
      }
    );
    setSaving(false);
    if (res.ok) router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {highlights.map((h, i) => (
        <div
          key={h.id}
          className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-[var(--foreground)]">
              見どころ {i + 1}
            </h3>
            <button
              type="button"
              onClick={() => removeHighlight(h.id)}
              className="text-sm text-red-600 hover:text-red-700"
            >
              削除
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
                タイトル
              </label>
              <input
                type="text"
                value={h.title}
                onChange={(e) => updateHighlight(h.id, "title", e.target.value)}
                required
                placeholder="例: 人気アーティストのライブ"
                className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
                説明
              </label>
              <textarea
                value={h.description ?? ""}
                onChange={(e) =>
                  updateHighlight(h.id, "description", e.target.value)
                }
                rows={3}
                placeholder="見どころの詳細を入力"
                className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
                サムネ画像URL
              </label>
              <input
                type="url"
                value={h.imageUrl ?? ""}
                onChange={(e) =>
                  updateHighlight(h.id, "imageUrl", e.target.value)
                }
                placeholder="https://... または /images/xxx.jpg"
                className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
              />
            </div>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addHighlight}
        className="rounded-lg border border-dashed border-[var(--border)] px-4 py-2 text-[var(--primary)] transition-colors hover:bg-[var(--primary)]/5"
      >
        + 見どころを追加
      </button>
      <div>
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-[var(--primary)] px-6 py-2 font-medium text-white shadow-sm transition-all hover:bg-[var(--primary-hover)] disabled:opacity-50"
        >
          {saving ? "保存中..." : "保存"}
        </button>
      </div>
    </form>
  );
}
