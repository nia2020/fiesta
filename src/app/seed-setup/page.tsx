"use client";

import { useState } from "react";

export default function SeedSetupPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSeed = async () => {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch("/api/admin/seed-articles", { method: "POST" });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "エラーが発生しました");
        return;
      }
      setResult(data.message ?? "完了しました");
    } catch (e) {
      setError(String(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="mb-6 text-2xl font-bold text-[var(--foreground)]">
        初期データ投入
      </h1>
      <p className="mb-6 text-[var(--muted)]">
        サンプル記事と管理者アカウントをデータベースに追加します。
        初回のみ実行してください。
      </p>
      <button
        onClick={handleSeed}
        disabled={loading}
        className="rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[var(--primary-hover)] disabled:opacity-50"
      >
        {loading ? "実行中..." : "サンプルデータを投入"}
      </button>
      {result && (
        <p className="mt-6 text-green-600 dark:text-green-400">{result}</p>
      )}
      {error && (
        <p className="mt-6 text-red-600 dark:text-red-400">{error}</p>
      )}
      <p className="mt-8 text-sm text-[var(--muted)]">
        管理者: admin@fiesta.example / password123
      </p>
    </div>
  );
}
