"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type User = { id: string; name: string | null; email: string };
type Predecessor = { id: string; user: { name: string | null } | null };

export function ChairpersonForm({
  festival,
  users,
  predecessorOptions,
}: {
  festival: {
    id: string;
    university: { name: string };
    year: number;
    chairperson: {
      id: string;
      userId: string;
      predecessorId: string | null;
      handoverDate: Date | string | null;
      handoverComment: string | null;
      message: string | null;
    } | null;
  };
  users: User[];
  predecessorOptions: Predecessor[];
}) {
  const chairperson = festival.chairperson;
  const [userId, setUserId] = useState(chairperson?.userId ?? "");
  const [predecessorId, setPredecessorId] = useState(
    chairperson?.predecessorId ?? ""
  );
  const [handoverDate, setHandoverDate] = useState(
    chairperson?.handoverDate
      ? new Date(chairperson.handoverDate as Date).toISOString().slice(0, 10)
      : ""
  );
  const [handoverComment, setHandoverComment] = useState(
    chairperson?.handoverComment ?? ""
  );
  const [message, setMessage] = useState(chairperson?.message ?? "");
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch(
      `/api/admin/festivals/${festival.id}/chairperson`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: userId || null,
          predecessorId: predecessorId || null,
          handoverDate: handoverDate || null,
          handoverComment: handoverComment || null,
          message: message || null,
        }),
      }
    );
    setSaving(false);
    if (res.ok) router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
          委員長（ユーザー）
        </label>
        <select
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
        >
          <option value="">選択してください</option>
          {users.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name ?? u.email}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
          前委員長
        </label>
        <select
          value={predecessorId}
          onChange={(e) => setPredecessorId(e.target.value)}
          className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
        >
          <option value="">なし</option>
          {predecessorOptions.map((p) => (
            <option key={p.id} value={p.id}>
              {p.user?.name ?? p.id}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
          引き継ぎ日
        </label>
        <input
          type="date"
          value={handoverDate}
          onChange={(e) => setHandoverDate(e.target.value)}
          className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
          引き継ぎコメント
        </label>
        <textarea
          value={handoverComment}
          onChange={(e) => setHandoverComment(e.target.value)}
          rows={2}
          className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
          メッセージ
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
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
