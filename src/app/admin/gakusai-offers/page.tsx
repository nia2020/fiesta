import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import Link from "next/link";
import { GakusaiOffersClient } from "./GakusaiOffersClient";

export default async function AdminGakusaiOffersPage() {
  const session = await auth();
  if (!session?.user || session.user.role !== "SYSTEM_ADMIN") {
    redirect("/admin");
  }

  const offers = await prisma.gakusaiInterviewOffer.findMany({
    orderBy: { createdAt: "desc" },
  });
  const serialized = offers.map((o) => ({
    ...o,
    createdAt: o.createdAt.toISOString(),
  }));

  const baseUrl = process.env.NEXTAUTH_URL ?? "http://localhost:3000";

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-[var(--foreground)]">
        取材オファー管理
      </h1>
      <p className="mb-8 text-[var(--muted)]">
        委員長に取材をオファーし、招待リンクを発行します。リンクを送った方だけが取材を受けられます。
      </p>
      <GakusaiOffersClient
        initialOffers={serialized}
        baseUrl={baseUrl}
      />
    </div>
  );
}
