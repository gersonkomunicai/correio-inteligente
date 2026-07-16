import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getResend } from "@/lib/resend";
import { leadSchema } from "@/lib/schemas/lead";

// POST /api/leads
// Recebe os dados do formulário de contato, valida, grava no Postgres
// e dispara um e-mail de notificação. Ver docs/api-leads.md para o contrato completo.
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Corpo da requisição precisa ser um JSON válido." },
      { status: 400 }
    );
  }

  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    // z.flatten() agrupa os erros por campo, facilitando mostrar no form
    return NextResponse.json(
      { error: "Dados inválidos.", fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // A gravação no banco é o passo crítico: se falhar, a requisição falha.
  const lead = await prisma.lead.create({
    data: {
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      companyWebsite: data.companyWebsite,
      acceptsCommunication: data.acceptsCommunication,
      acceptsPrivacyPolicy: data.acceptsPrivacyPolicy,
    },
  });

  // O e-mail é "melhor esforço": se o Resend falhar, o lead já está salvo,
  // então não derrubamos a requisição por causa disso — só registramos o erro.
  try {
    // O SDK do Resend não lança exceção pra erros da API (ex: sandbox sem
    // domínio verificado) — ele devolve { error } dentro da resposta, sem
    // rejeitar a Promise. Por isso checamos o `error` do retorno também, e
    // não só o try/catch (que cobre coisas como chave ausente, que aí sim
    // lançam na hora de construir o client).
    const { error } = await getResend().emails.send({
      from: "Correio Inteligente <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO ?? "gersonjunior@komunicai.com",
      subject: `Novo lead: ${data.company}`,
      text: [
        `Nome: ${data.name}`,
        `Empresa: ${data.company}`,
        `E-mail: ${data.email}`,
        `Telefone: ${data.phone}`,
        `Site: ${data.companyWebsite ?? "-"}`,
        `Aceite de comunicação: sim`,
        `Aceite de política de privacidade: sim`,
      ].join("\n"),
    });

    if (error) {
      console.error("Falha ao enviar e-mail de notificação do lead:", error);
    }
  } catch (error) {
    console.error("Falha ao enviar e-mail de notificação do lead:", error);
  }

  return NextResponse.json({ success: true, id: lead.id }, { status: 201 });
}
