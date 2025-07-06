'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">{t('greeting')}</h1>

      <div className="space-x-2 rtl:space-x-reverse">
        <Link href="/" locale="en" className="underline">
          EN
        </Link>
        <Link href="/" locale="ar" className="underline">
          AR
        </Link>
      </div>

      <p>{t('language')} ({locale})</p>
    </main>
  );
}
