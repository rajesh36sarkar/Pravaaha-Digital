import ContactForm from '@/components/contact/ContactForm';
import BookNowPopup from '@/components/contact/BookNowPopup';

export const metadata = { title: 'Contact Us | Pravaaha Digital' };

export default async function ContactPage({ params }) {
  const { locale } = await params;

  return (
    <div className="min-h-screen pb-24 relative z-10">
      <div className="pt-24 pb-16 border-b"
        style={{ borderColor: 'var(--theme-border)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
            style={{ color: 'var(--theme-text-main)' }}>
            Let's Talk
          </h1>
          <p className="text-lg max-w-2xl mx-auto font-medium"
            style={{ color: 'var(--theme-text-muted)' }}>
            Have a project in mind? Drop your details below or secure your booking with our token system.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-16">
        <ContactForm />
      </div>

      <BookNowPopup locale={locale} />
    </div>
  );
}