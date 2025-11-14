// ========================================
// 1. components/LanguageSwitcher.tsx
// ========================================
"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useTransition } from 'react';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex gap-2">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => changeLanguage(loc)}
          disabled={isPending}
          className={`px-3 py-1 text-sm font-medium transition-all duration-200 ${
            locale === loc
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700'
          } ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}