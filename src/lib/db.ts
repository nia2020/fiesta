import { PrismaClient } from "@/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

function getConnectionString(): string {
  const url =
    process.env.DATABASE_URL ??
    process.env.POSTGRES_PRISMA_URL ??
    process.env.POSTGRES_URL;
  if (!url || (!url.startsWith("postgresql") && !url.startsWith("postgres://"))) {
    throw new Error(
      "DATABASE_URL が設定されていません。Vercel の Settings → Environment Variables で " +
        "Prisma Postgres を接続するか、DATABASE_URL を手動で追加してください。"
    );
  }
  return url;
}

function createPrismaClient() {
  const connectionString = getConnectionString();
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
