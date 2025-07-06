import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '../../i18n';
import { ThemeProvider } from "@/components/theme-provider"

// تحميل رسائل اللغة المطلوبة
async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // التحقق من أن اللغة مدعومة
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages(locale);

  // تحديد الاتجاه بناءً على اللغة
  const dir = locale.startsWith('ar') ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextIntlClientProvider locale={locale} messages={messages}>
              {children}
            </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}







