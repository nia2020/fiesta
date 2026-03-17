import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { UniversityForm } from "./UniversityForm";

export default async function AdminUniversityEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const university = await prisma.university.findUnique({
    where: { id },
    include: { festivals: { orderBy: { year: "desc" } } },
  });

  if (!university) notFound();

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-[var(--foreground)]">
        大学編集: {university.name}
      </h1>
      <UniversityForm university={university} />
    </div>
  );
}
