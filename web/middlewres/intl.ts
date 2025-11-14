import createMiddleware from "next-intl/middleware";

export const intlMiddleware = createMiddleware({
  locales: ["en", "es"],
  defaultLocale: "es",
});
