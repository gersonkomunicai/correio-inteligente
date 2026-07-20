FROM node:22-slim AS deps
WORKDIR /app
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*
COPY package.json package-lock.json ./
COPY prisma ./prisma
RUN npm ci

FROM node:22-slim AS builder
WORKDIR /app
# Variáveis NEXT_PUBLIC_* são embutidas no bundle do cliente durante o build,
# então precisam chegar aqui via --build-arg, não só em runtime.
ARG NEXT_PUBLIC_GTM_ID
ENV NEXT_PUBLIC_GTM_ID=$NEXT_PUBLIC_GTM_ID
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:22-slim AS runner
WORKDIR /app
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/prisma.config.ts ./prisma.config.ts
COPY --from=builder /app/prisma ./prisma
EXPOSE 3000
CMD ["npm", "run", "start"]
