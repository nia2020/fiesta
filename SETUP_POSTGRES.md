# PostgreSQL セットアップ手順（本番デプロイ用）

学祭記事などを表示するには、PostgreSQL データベースの設定が必要です。

## 1. データベースを作成

### 方法A: Vercel Postgres（推奨）

1. [Vercel ダッシュボード](https://vercel.com/dashboard) でプロジェクトを開く
2. **Storage** タブ → **Create Database** → **Postgres** を選択
3. 作成後、**Connect** から接続情報をコピー
4. プロジェクトの **Settings** → **Environment Variables** に以下を追加:
   - `DATABASE_URL` = コピーした接続文字列（`postgresql://...`）

### 方法B: Neon（無料枠あり）

1. [Neon](https://neon.tech) でアカウント作成
2. 新しいプロジェクトを作成
3. 接続文字列をコピー（Connection string）
4. Vercel の **Environment Variables** に `DATABASE_URL` を設定

## 2. 環境変数がビルドで使えるか確認

Vercel の **Settings** → **Environment Variables** で次を確認してください:

- `DATABASE_URL` が存在する
- **Production**（と **Preview**）にチェックが入っている
- 接続直後は再デプロイが必要な場合があります

## 3. マイグレーション実行

Vercel にデプロイすると、ビルド時に自動で `prisma migrate deploy` が実行され、テーブルが作成されます。

ローカルで先に実行する場合:

```bash
# .env に DATABASE_URL を設定してから
npx prisma migrate deploy
npx prisma db seed  # 初期データ投入（任意）
```

## 4. 環境変数一覧

| 変数名 | 説明 |
|--------|------|
| DATABASE_URL | PostgreSQL 接続文字列（必須） |
| NEXTAUTH_SECRET | NextAuth 用シークレット |
| NEXTAUTH_URL | 本番URL（例: https://fiesta-app.vercel.app） |
| GEMINI_API_KEY | 学祭がくれたもの（AI取材）用 |
