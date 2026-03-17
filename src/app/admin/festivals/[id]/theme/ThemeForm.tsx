"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Theme = {
  themeName: string;
  eventDate: Date | null;
  eventEndDate: Date | null;
  venue: string | null;
  details: string | null;
  accessInfo: string | null;
  schedule: string | null;
} | null;

export function ThemeForm({
  festival,
}: {
  festival: { id: string; theme: Theme };
}) {
  const t = festival.theme;
  const [themeName, setThemeName] = useState(t?.themeName ?? "");
  const [eventDate, setEventDate] = useState(
    t?.eventDate ? new Date(t.eventDate).toISOString().slice(0, 10) : ""
  );
  const [eventEndDate, setEventEndDate] = useState(
    t?.eventEndDate ? new Date(t.eventEndDate).toISOString().slice(0, 10) : ""
  );
  const [venue, setVenue] = useState(t?.venue ?? "");
  const [details, setDetails] = useState(t?.details ?? "");
  const [accessInfo, setAccessInfo] = useState(t?.accessInfo ?? "");
  const [schedule, setSchedule] = useState(t?.schedule ?? "");
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const res = await fetch(`/api/admin/festivals/${festival.id}/theme`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        themeName,
        eventDate: eventDate || null,
        eventEndDate: eventEndDate || null,
        venue: venue || null,
        details: details || null,
        accessInfo: accessInfo || null,
        schedule: schedule || null,
      }),
    });
    setSaving(false);
    if (res.ok) router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
      <div>
        <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
          テーマ名
        </label>
        <input
          type="text"
          value={themeName}
          onChange={(e) => setThemeName(e.target.value)}
          required
          className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
            開催日
          </label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
            終了日
          </label>
          <input
            type="date"
            value={eventEndDate}
            onChange={(e) => setEventEndDate(e.target.value)}
            className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
          会場
        </label>
        <input
          type="text"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
          詳細
        </label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={4}
          className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
          アクセス
        </label>
        <input
          type="text"
          value={accessInfo}
          onChange={(e) => setAccessInfo(e.target.value)}
          className="w-full rounded-lg border border-[var(--border)] px-4 py-2"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-[var(--foreground)]">
          スケジュール
        </label>
        <textarea
          value={schedule}
          onChange={(e) => setSchedule(e.target.value)}
          rows={6}
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
