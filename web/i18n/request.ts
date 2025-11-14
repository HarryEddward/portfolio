// ========================================
// ACTUALIZA TU i18n/request.ts (si no está así)
// ========================================
import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
 
  return {
    locale,
    // ⬇️ CARGAR LOS MENSAJES AQUÍ
    messages: (await import(`../messages/${locale}.json`)).default
  };
});