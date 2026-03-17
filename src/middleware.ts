import { auth } from "@/lib/auth";

export default auth((req) => {
  const isAdmin = req.nextUrl.pathname.startsWith("/admin");
  const isMyPage = req.nextUrl.pathname.startsWith("/mypage");
  if ((isAdmin || isMyPage) && !req.auth) {
    const url = new URL("/login", req.url);
    url.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return Response.redirect(url);
  }
  return undefined;
});

export const config = {
  matcher: ["/admin/:path*", "/mypage/:path*"],
};
