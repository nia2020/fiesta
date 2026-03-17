/**
 * 写真アップロード
 * - 本番: Vercel Blob (BLOB_READ_WRITE_TOKEN 必須)
 * - 開発: public/uploads に保存
 */
import { put } from "@vercel/blob";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const UPLOAD_DIR = "gakusai";
const MAX_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export async function uploadImage(
  file: File,
  prefix = "photo"
): Promise<{ url: string }> {
  if (file.size > MAX_SIZE) {
    throw new Error("ファイルサイズは5MB以下にしてください");
  }
  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error("JPEG、PNG、WebP形式のみ対応しています");
  }

  const ext = file.name.split(".").pop() || "jpg";
  const filename = `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  // Vercel Blob が設定されていれば使用
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await put(`gakusai/${filename}`, file, {
      access: "public",
    });
    return { url: blob.url };
  }

  // 開発環境: public/uploads に保存
  const uploadPath = path.join(
    process.cwd(),
    "public",
    "uploads",
    UPLOAD_DIR,
    filename
  );
  const dir = path.dirname(uploadPath);
  await mkdir(dir, { recursive: true });
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(uploadPath, buffer);
  return { url: `/uploads/${UPLOAD_DIR}/${filename}` };
}
