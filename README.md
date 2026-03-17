# Fiesta - 学園祭実行委員会サイト

大学学園祭実行委員会の委員長・組織に特化したサイトです。複数大学の学祭情報を一般公開できます。

## 機能

- **委員長紹介**: 年度別の実行委員長一覧・詳細
- **引き継ぎ履歴**: 委員長の引き継ぎチェーンをタイムライン表示
- **学祭テーマ・詳細**: テーマ、開催日、会場、スケジュール
- **協賛プラン**: プラン一覧、特典、お問い合わせ導線
- **学祭がくれたもの**: AI 取材記事（委員長の経験談を AI が記事化、写真対応）
- **マイページ**: プロフィール編集（ログイン済みユーザー）
- **管理画面**: 委員長・テーマ・協賛プラン・大学の編集（管理者ロール）

## セットアップ

```bash
# 依存関係インストール
npm install

# 環境変数（.env がなければ .env.example をコピー）
cp .env.example .env

# データベースマイグレーション
npm run db:migrate

# シードデータ投入（サンプル大学・委員長・テーマ・協賛プラン）
npm run db:seed

# 開発サーバー起動
npm run dev
```

http://localhost:3000 でアクセス

## テストアカウント

- **管理者**: admin@fiesta.example / password123
- **委員長（2024年度）**: chair2024@example.com / password123
- **委員長（2023年度）**: chair2023@example.com / password123

## 技術スタック

- Next.js 16 (App Router)
- Prisma 7 (SQLite / PostgreSQL)
- NextAuth v5
- Tailwind CSS
- TypeScript

## 学祭がくれたもの（AI 取材）

委員長がフォームで回答し、写真を添付すると AI が記事を自動生成します。

- **取材フォーム**: `/gakusai/interview`
- **環境変数**: `.env` に `GEMINI_API_KEY` を設定（[Google AI Studio](https://aistudio.google.com/apikey) で取得、無料枠あり）
- **写真アップロード**: 本番では `BLOB_READ_WRITE_TOKEN`（Vercel Blob）を設定。未設定時は開発用に `public/uploads` に保存

## 本番デプロイ

1. `.env` に `DATABASE_URL`（PostgreSQL推奨）、`NEXTAUTH_SECRET`、`NEXTAUTH_URL` を設定
2. `prisma/schema.prisma` の `provider` を `postgresql` に変更
3. `GEMINI_API_KEY` を設定（学祭がくれたものの AI 記事生成用）
4. `npm run db:migrate` でマイグレーション
5. `npm run build && npm start` で起動
