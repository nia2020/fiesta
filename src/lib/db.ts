import type { PrismaClient } from "@/generated/prisma";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | null };

function createPrismaClient(): PrismaClient | null {
  try {
    const { PrismaClient: PC } = require("@/generated/prisma");
    const { PrismaBetterSqlite3 } = require("@prisma/adapter-better-sqlite3");
    const adapter = new PrismaBetterSqlite3({
      url: process.env.DATABASE_URL || "file:./dev.db",
    });
    return new PC({ adapter });
  } catch {
    return null;
  }
}

function createThrowProxy(): PrismaClient {
  return new Proxy({} as PrismaClient, {
    get() {
      throw new Error("DB_UNAVAILABLE");
    },
  });
}

const raw = globalForPrisma.prisma ?? createPrismaClient();
export const prisma: PrismaClient = raw ?? createThrowProxy();
if (process.env.NODE_ENV !== "production" && raw) globalForPrisma.prisma = raw;
