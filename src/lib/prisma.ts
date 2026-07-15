import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Prisma 7 exige um "driver adapter" explícito — aqui usamos node-postgres (pg)
// apontando pra connection string do Postgres (ver .env.example -> DATABASE_URL).
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// Reaproveita a mesma instância entre hot-reloads em dev, evitando esgotar
// as conexões do Postgres a cada alteração de arquivo.
export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
