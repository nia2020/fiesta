"use client";

import { useState } from "react";
import Link from "next/link";

interface Offer {
  id: string;
  inviteToken: string;
  chairpersonName: string;
  university: string;
  year: number;
  status: string;
  articleId: string | null;
  createdAt: string | Date;
}

interface Props {
  initialOffers: Offer[];
  baseUrl: string;
}

export function GakusaiOffersClient({ initialOffers, baseUrl }: Props) {
  const [offers, setOffers] = useState(initialOffers);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({
    chairpersonName: "",
    university: "",
    year: new Date().getFullYear(),
  });

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!form.chairpersonName.trim() || !form.university.trim()) return;
    setCreating(true);
    try {
      const res = await fetch("/api/admin/gakusai/offers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "エラー");
      setOffers((prev) => [
        {
          id: data.offer.id,
          inviteToken: data.offer.inviteToken,
          chairpersonName: data.offer.chairpersonName,
          university: data.offer.university,
          year: data.offer.year,
          status: data.offer.status,
          articleId: null,
          createdAt: new Date().toISOString(),
        },
        ...prev,
      ]);
      setForm({ chairpersonName: "", university: "", year: new Date().getFullYear() });
    } catch (err) {
      alert(err instanceof Error ? err.message : "作成に失敗しました");
    } finally {
      setCreating(false);
    }
  }

  function copyInviteUrl(token: string) {
    const url = `${baseUrl}/gakusai/interview/${token}`;
    navigator.clipboard.writeText(url);
    alert("招待リンクをコピーしました");
  }

  const statusLabel: Record<string, string> = {
    pending: "未開始",
    in_progress: "取材中",
    completed: "完了",
  };

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
        <h2 className="mb-4 text-lg font-semibold text-[var(--foreground)]">
          新規オファー作成
        </h2>
        <form onSubmit={handleCreate} className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="委員長名"
            value={form.chairpersonName}
            onChange={(e) =>
              setForm((p) => ({ ...p, chairpersonName: e.target.value }))
            }
            className="rounded-lg border border-[var(--border)] px-4 py-2"
            required
          />
          <input
            type="text"
            placeholder="大学名"
            value={form.university}
            onChange={(e) =>
              setForm((p) => ({ ...p, university: e.target.value }))
            }
            className="rounded-lg border border-[var(--border)] px-4 py-2"
            required
          />
          <input
            type="number"
            placeholder="年度"
            value={form.year}
            onChange={(e) =>
              setForm((p) => ({ ...p, year: parseInt(e.target.value) || p.year }))
            }
            min={2000}
            max={2100}
            className="w-24 rounded-lg border border-[var(--border)] px-4 py-2"
          />
          <button
            type="submit"
            disabled={creating}
            className="rounded-lg bg-[var(--primary)] px-6 py-2 font-medium text-white hover:bg-[var(--primary-hover)] disabled:opacity-50"
          >
            {creating ? "作成中..." : "オファー作成"}
          </button>
        </form>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold text-[var(--foreground)]">
          オファー一覧
        </h2>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)]">
          {offers.length === 0 ? (
            <p className="p-12 text-center text-[var(--muted)]">
              オファーはまだありません
            </p>
          ) : (
            <ul className="divide-y divide-[var(--border)]">
              {offers.map((o) => (
                <li
                  key={o.id}
                  className="flex flex-wrap items-center justify-between gap-4 p-5"
                >
                  <div>
                    <p className="font-medium text-[var(--foreground)]">
                      {o.chairpersonName}（{o.university} {o.year}年度）
                    </p>
                    <p className="text-sm text-[var(--muted)]">
                      {statusLabel[o.status] ?? o.status}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => copyInviteUrl(o.inviteToken)}
                      className="rounded-lg border border-[var(--border)] px-4 py-2 text-sm hover:bg-[var(--section-bg)]"
                    >
                      リンクをコピー
                    </button>
                    {o.status === "completed" && o.articleId && (
                      <Link
                        href={`/gakusai/${o.articleId}`}
                        className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--primary-hover)]"
                      >
                        記事を見る
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
