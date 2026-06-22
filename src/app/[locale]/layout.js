import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import PageBackground from '@/components/common/PageBackground';
import { getTranslation } from '@/lib/i18n';

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const t = getTranslation(locale);

  return (
    <>
      <PageBackground />
      <Navbar t={t.nav} locale={locale} />
      <main className="flex-grow pt-20 bg-transparent relative z-10">
        {children}
      </main>
      <Footer t={t.nav} locale={locale} />
    </>
  );
}