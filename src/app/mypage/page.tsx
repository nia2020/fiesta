import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { MyPageForm } from "./MyPageForm";

export default async function MyPage() {
  const session = await auth();
  if (!session?.user) redirect("/login?callbackUrl=/mypage");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
  });

  if (!user) redirect("/login");

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="mb-8 text-3xl font-bold text-[var(--foreground)]">マイページ</h1>
      <MyPageForm user={user} />
    </div>
  );
}
