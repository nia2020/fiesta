import Link from "next/link";

export default function GakusaiInterviewInfoPage() {
  return (
    <div className="min-h-screen bg-[#0f2360]">
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <Link
          href="/#gakusai"
          className="mb-6 inline-flex gap-1 text-sm text-white/80 transition-colors hover:text-white"
        >
          ← 学祭がくれたもの一覧へ
        </Link>

        <div className="rounded-xl bg-white p-8 shadow-lg">
          <h1 className="mb-4 text-2xl font-bold text-[var(--foreground)]">
            取材について
          </h1>
          <p className="mb-6 leading-relaxed text-[var(--foreground)]">
            学祭がくれたものの取材は<strong>オファー制</strong>です。
            運営から取材のご案内をお送りした方のみ、招待リンクから取材を受けていただけます。
          </p>
          <p className="text-sm text-[var(--muted)]">
            招待リンクをお持ちの方は、そのリンクからアクセスしてください。
            リンクが届いていない場合は、運営までお問い合わせください。
          </p>
        </div>
      </div>
    </div>
  );
}
