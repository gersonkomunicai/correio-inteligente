import { Resend } from "resend";

// Cliente único do Resend, reaproveitado entre requisições (mesmo padrão do src/lib/prisma.ts)
export const resend = new Resend(process.env.RESEND_API_KEY);
