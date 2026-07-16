# API de Leads

Endpoint que recebe os dados do formulário de contato do final da landing page, grava o lead no Postgres e notifica por e-mail.

## `POST /api/leads`

Arquivo: [`src/app/api/leads/route.ts`](../src/app/api/leads/route.ts)

### Request

`Content-Type: application/json`

| Campo                   | Tipo      | Obrigatório | Regras                                              |
| ----------------------- | --------- | :---------: | ---------------------------------------------------- |
| `name`                  | `string`  |     sim      | não pode ser vazio                                    |
| `company`                | `string`  |     sim      | não pode ser vazio                                    |
| `email`                 | `string`  |     sim      | precisa ser um e-mail válido                          |
| `phone`                 | `string`  |     sim      | mínimo de 8 caracteres                                |
| `companyWebsite`         | `string`  |     não      | URL válida se enviado; string vazia é tratada como ausente |
| `acceptsCommunication`   | `boolean` |     sim      | opt-in de marketing; aceita `true` ou `false`         |
| `acceptsPrivacyPolicy`   | `boolean` |     sim      | precisa ser exatamente `true`                         |

O contrato completo é o schema Zod em [`src/lib/schemas/lead.ts`](../src/lib/schemas/lead.ts) — em caso de dúvida, ele é a fonte da verdade (este documento pode ficar desatualizado, o schema não).

#### Exemplo

```json
{
  "name": "Maria Silva",
  "company": "Prefeitura de Natal",
  "email": "maria@prefeitura.rn.gov.br",
  "phone": "(84) 99999-0000",
  "companyWebsite": "https://natal.rn.gov.br",
  "acceptsCommunication": true,
  "acceptsPrivacyPolicy": true
}
```

### Respostas

**`201 Created`** — lead salvo com sucesso.

```json
{ "success": true, "id": "cly3x9f8e0000abc123xyz" }
```

**`400 Bad Request`** — corpo não é JSON válido, ou falhou a validação.

```json
{
  "error": "Dados inválidos.",
  "fieldErrors": {
    "email": ["E-mail inválido."],
    "acceptsPrivacyPolicy": ["É necessário aceitar a política de privacidade."]
  }
}
```

`fieldErrors` é o retorno de `z.flatten().fieldErrors` do Zod: cada chave é o nome do campo, o valor é a lista de mensagens de erro daquele campo. Use isso pra destacar o campo certo no formulário.

**`500 Internal Server Error`** — falha inesperada (ex: banco fora do ar). A gravação no Postgres é o único passo que pode derrubar a requisição.

> O envio do e-mail de notificação (Resend) é "melhor esforço": se ele falhar, o lead já foi salvo no banco e a API ainda responde `201`. A falha só é registrada no log do servidor (`console.error`).

## Variáveis de ambiente

Definidas em [`.env.example`](../.env.example) — copie para `.env` e preencha:

| Variável                | Usado por                              | Descrição                                                        |
| ------------------------ | --------------------------------------- | ------------------------------------------------------------------ |
| `POSTGRES_USER`          | `docker-compose.yml`                    | Usuário do Postgres no container                                   |
| `POSTGRES_PASSWORD`      | `docker-compose.yml`                    | Senha do Postgres no container                                     |
| `POSTGRES_DB`            | `docker-compose.yml`                    | Nome do banco criado no container                                   |
| `DATABASE_URL`           | `prisma.config.ts`, `src/lib/prisma.ts` | Connection string completa do Postgres (usuário/senha precisam bater com as três variáveis acima) |
| `RESEND_API_KEY`         | `src/lib/resend.ts`                     | API key do [resend.com](https://resend.com) usada para enviar o e-mail de notificação |
| `CONTACT_EMAIL_TO`       | `src/app/api/leads/route.ts`            | E-mail que recebe a notificação de cada novo lead                   |

## Banco de dados (Postgres via Docker)

O Postgres roda em container, definido em [`docker-compose.yml`](../docker-compose.yml), pensado pra subir numa VPS. Por padrão a porta 5432 é publicada só em `127.0.0.1` (não fica exposta pra internet) — isso significa que a aplicação Next.js precisa rodar na mesma VPS pra alcançar o banco. Se o app for hospedado em outro lugar (ex: Vercel), a porta precisa ser exposta com senha forte + regra de firewall liberando só o IP de onde o app roda.

### Subir o banco

```bash
docker compose up -d
```

### Aplicar o schema (migrations)

Com o `DATABASE_URL` do `.env` apontando pro banco (local ou da VPS):

```bash
npm run db:migrate
```

Isso cria a tabela `Lead` (ver [`prisma/schema.prisma`](../prisma/schema.prisma)) e o histórico de migrations em `prisma/migrations/`.

### Inspecionar os dados

```bash
npm run db:studio
```

Abre o Prisma Studio (interface web) apontando pro mesmo `DATABASE_URL`.

## Modelo `Lead`

```prisma
model Lead {
  id      String @id @default(cuid())

  name    String
  company String
  email   String
  phone   String

  companyWebsite String?

  acceptsCommunication Boolean
  acceptsPrivacyPolicy Boolean

  createdAt DateTime @default(now())
}
```

## Nota sobre Prisma 7

Este projeto usa Prisma 7, que trocou a forma de configurar a conexão com o banco:

- `prisma/schema.prisma` não tem mais `url` no bloco `datasource` (isso quebra o `prisma generate`/`migrate` em versões antigas do Prisma).
- [`prisma.config.ts`](../prisma.config.ts) é lido pelo **CLI** (`generate`, `migrate`, `studio`) pra saber a connection string.
- [`src/lib/prisma.ts`](../src/lib/prisma.ts) monta o `PrismaClient` em **runtime** (dentro da API route) usando um driver adapter (`@prisma/adapter-pg`, baseado no pacote `pg`).

Os dois lêem `DATABASE_URL`, mas são caminhos de código independentes — se um funcionar e o outro não, confira se ambos têm acesso à variável de ambiente.
