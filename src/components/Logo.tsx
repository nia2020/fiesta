"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  /** 白文字ロゴ用：暗い背景で使用する場合は true */
  variant?: "light" | "dark";
  /** リンクを無効にする（ロゴのみ表示） */
  noLink?: boolean;
  /** 追加のクラス名 */
  className?: string;
  /** ロゴの高さ（px） */
  height?: number;
}

/**
 * 祭ケデリック ロゴ
 * サウナイキタイ風の太く丸いレトロポップな白文字ロゴ
 */
export function Logo({
  variant = "light",
  noLink = false,
  className = "",
  height = 40,
}: LogoProps) {
  const logoSrc = "/saike_logo.png";

  const content = (
    <Image
      src={logoSrc}
      alt="祭ケデリック"
      width={height * 4.5}
      height={height}
      className={`object-contain object-left ${className}`}
      priority
    />
  );

  if (noLink) {
    return <span className={`inline-block ${className}`}>{content}</span>;
  }

  return (
    <Link
      href="/"
      className={`inline-block transition-opacity hover:opacity-90 ${className}`}
    >
      {content}
    </Link>
  );
}
