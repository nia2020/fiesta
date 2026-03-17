"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ja">
      <body style={{ fontFamily: "system-ui", padding: "2rem", background: "#fafafa" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h1 style={{ color: "#333", marginBottom: "1rem" }}>エラーが発生しました</h1>
          <pre
            style={{
              background: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              padding: "1rem",
              overflow: "auto",
              fontSize: "14px",
              color: "#c00",
            }}
          >
            {error.message}
          </pre>
          <button
            onClick={() => reset()}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              background: "#7c3aed",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            再試行
          </button>
        </div>
      </body>
    </html>
  );
}
