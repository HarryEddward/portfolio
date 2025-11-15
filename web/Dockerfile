# --- 1. Etapa Base ---
# Usamos una imagen ligera con Node.js
FROM node:20-alpine AS base
WORKDIR /app
# Activamos corepack (la forma moderna de usar pnpm)
RUN corepack enable pnpm

# --- 2. Etapa de Dependencias ---
# Instala solo las dependencias para aprovechar el caché
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# --- 3. Etapa de Build ---
# Construye la aplicación
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build
# Esto ejecutará 'next build' y creará .next/standalone gracias a tu config

# --- 4. Etapa Final (Runner) ---
# Esta es la imagen que irá a producción. Es mínima.
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# No ejecutamos como 'root', por seguridad
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copiamos la build 'standalone'
COPY --from=builder /app/.next/standalone .
# Copiamos las carpetas 'public' y 'static'
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Damos permisos al usuario no-root
RUN chown -R nextjs:nodejs .
USER nextjs

EXPOSE 3000

# El comando para arrancar el servidor standalone
CMD ["pnpm", "run", "start"]