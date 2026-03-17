/**
 * 軽量ミドルウェア（Edge 1MB 制限対応）
 * admin / mypage の認証は各 layout で実施
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
