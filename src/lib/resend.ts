import { Resend } from "resend";

let client: Resend | null = null;

// Construção adiada de propósito: o construtor do Resend lança erro
// imediatamente se RESEND_API_KEY estiver ausente. Adiar pra dentro do
// try/catch de src/app/api/leads/route.ts garante que a falta da chave
// só derruba o envio do e-mail, não o cadastro do lead no banco.
export function getResend() {
  if (!client) {
    client = new Resend(process.env.RESEND_API_KEY);
  }
  return client;
}
