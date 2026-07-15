import { defineConfig } from "prisma/config";

// Usado pelo CLI do Prisma (generate/migrate/studio) para saber como
// conectar no Postgres. Em runtime (API routes) quem monta a conexão é
// src/lib/prisma.ts — os dois lêem DATABASE_URL do .env.
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Fallback evita quebrar `prisma generate` (ex: rodando via postinstall)
    // em máquinas/CI que ainda não têm um .env configurado. Comandos que
    // realmente conversam com o banco (migrate, studio, db pull) vão falhar
    // com um erro de conexão claro se essa URL falsa continuar sendo usada.
    url: process.env.DATABASE_URL ?? "postgresql://user:password@localhost:5432/db",
  },
});
