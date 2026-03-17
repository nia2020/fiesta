"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";

interface ChatMessage {
  role: "ai" | "user";
  content: string;
}

interface OfferInfo {
  chairpersonName: string;
  university: string;
  year: number;
  status: string;
  conversation: ChatMessage[] | null;
}

export default function GakusaiInterviewPage() {
  const params = useParams();
  const token = params.token as string;
  const [offer, setOffer] = useState<OfferInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [answer, setAnswer] = useState("");
  const [sending, setSending] = useState(false);
  const [completing, setCompleting] = useState(false);
  const [articleId, setArticleId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!token) return;
    fetch(`/api/gakusai/interview/${token}/offer`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setOffer(null);
        } else {
          setOffer(data);
          if (data.status === "completed" && data.articleId) {
            setArticleId(data.articleId);
          } else if (!data.conversation?.length) {
            startInterview();
          }
        }
      })
      .catch(() => setError("読み込みに失敗しました"))
      .finally(() => setLoading(false));
  }, [token]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [offer?.conversation]);

  async function startInterview() {
    if (!token || sending) return;
    setSending(true);
    try {
      const res = await fetch(`/api/gakusai/interview/${token}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      let data: { error?: string; conversation?: ChatMessage[] };
      try {
        data = await res.json();
      } catch {
        throw new Error("サーバーエラーが発生しました。GEMINI_API_KEY の設定を確認してください。");
      }
      if (!res.ok) throw new Error(data.error ?? "エラー");
      const conv = data.conversation ?? [];
      setOffer((prev) => (prev ? { ...prev, conversation: conv } : prev));
    } catch (err) {
      setError(err instanceof Error ? err.message : "エラーが発生しました");
    } finally {
      setSending(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!token || !answer.trim() || sending) return;
    setSending(true);
    const userAnswer = answer;
    setAnswer("");

    try {
      const res = await fetch(`/api/gakusai/interview/${token}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer: userAnswer }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "エラー");

      setOffer((prev) =>
        prev ? { ...prev, conversation: data.conversation } : prev
      );

      if (data.isComplete) {
        await completeInterview();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "エラーが発生しました");
      setAnswer(userAnswer);
    } finally {
      setSending(false);
    }
  }

  async function completeInterview() {
    if (!token || completing) return;
    setCompleting(true);
    try {
      const res = await fetch(`/api/gakusai/interview/${token}/complete`, {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "エラー");
      setArticleId(data.articleId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "記事の作成に失敗しました");
    } finally {
      setCompleting(false);
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0f2360]">
        <p className="text-white/80">読み込み中...</p>
      </div>
    );
  }

  if (error && !offer) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0f2360] px-4">
        <p className="mb-6 text-center text-white/90">{error}</p>
        <Link
          href="/#gakusai"
          className="text-sm text-white/80 underline hover:text-white"
        >
          トップへ戻る
        </Link>
      </div>
    );
  }

  if (articleId) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0f2360] px-4">
        <div className="mb-6 rounded-xl bg-white p-8 text-center">
          <p className="mb-4 text-lg font-medium text-[var(--foreground)]">
            記事が作成されました！
          </p>
          <Link
            href={`/gakusai/${articleId}`}
            className="inline-flex items-center gap-1 rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-white hover:bg-[var(--primary-hover)]"
          >
            記事を確認する →
          </Link>
        </div>
      </div>
    );
  }

  const conversation = offer?.conversation ?? [];

  return (
    <div className="min-h-screen bg-[#0f2360]">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
        <div className="mb-6 rounded-xl bg-white/10 px-4 py-3">
          <p className="text-sm text-white/90">
            {offer?.chairpersonName} さん（{offer?.university} {offer?.year}
            年度）への取材
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-lg">
          <h1 className="mb-6 text-xl font-bold text-[var(--foreground)]">
            AI 取材
          </h1>
          <p className="mb-6 text-sm text-[var(--muted)]">
            AI が質問します。お答えいただいた内容をもとに記事を作成します。
          </p>

          {error && (
            <div className="mb-6 rounded-lg bg-red-50 p-4 text-red-800">
              {error}
            </div>
          )}

          <div className="mb-6 max-h-96 space-y-4 overflow-y-auto">
            {conversation.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                    msg.role === "user"
                      ? "bg-[var(--primary)] text-white"
                      : "bg-gray-100 text-[var(--foreground)]"
                  }`}
                >
                  <p className="whitespace-pre-wrap text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
            {sending && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-gray-100 px-4 py-2.5">
                  <span className="animate-pulse text-sm text-[var(--muted)]">
                    考え中...
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {!completing ? (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="回答を入力..."
                disabled={sending}
                className="flex-1 rounded-lg border border-[var(--border)] px-4 py-2.5 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)] disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={sending || !answer.trim()}
                className="rounded-lg bg-[var(--primary)] px-6 py-2.5 font-medium text-white transition-colors hover:bg-[var(--primary-hover)] disabled:opacity-50"
              >
                送信
              </button>
            </form>
          ) : (
            <p className="text-center text-sm text-[var(--muted)]">
              記事を作成しています...
            </p>
          )}
        </div>

        <Link
          href="/#gakusai"
          className="mt-6 inline-block text-sm text-white/80 hover:text-white"
        >
          ← トップへ戻る
        </Link>
      </div>
    </div>
  );
}
