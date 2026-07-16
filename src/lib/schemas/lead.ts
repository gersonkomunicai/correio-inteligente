import { z } from "zod";

// Formato esperado do corpo (JSON) enviado pelo formulário de contato.
// name, company, email, phone, acceptsCommunication e acceptsPrivacyPolicy
// são obrigatórios; companyWebsite é opcional.
export const leadSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório."),
  company: z.string().trim().min(1, "Empresa é obrigatória."),
  email: z.email("E-mail inválido."),
  phone: z.string().trim().min(10, "Telefone inválido."),

  // Aceita string vazia (campo em branco no form) tratando como "não informado"
  companyWebsite: z
    .union([z.url("Site inválido."), z.literal("")])
    .optional()
    .transform((value) => (value ? value : undefined)),

  // Opt-in de marketing: o usuário pode deixar desmarcado
  acceptsCommunication: z.boolean(),

  // A política de privacidade precisa vir marcada (true) para o envio ser aceito
  acceptsPrivacyPolicy: z.literal(true, {
    message: "É necessário aceitar a política de privacidade.",
  }),
});

export type LeadInput = z.infer<typeof leadSchema>;
