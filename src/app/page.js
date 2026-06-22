'use client';

import { useRouter } from 'next/navigation';

export default function PreloaderPage() {
  const router = useRouter();

  const handleLanguageSelect = (locale) => {
    // Set cookie for middleware
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    router.push(`/${locale}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pageBg relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pencil-lightest rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pencil-light rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 text-center animate-fade-in max-w-lg w-full px-6">
        <div className="w-16 h-16 bg-pencil-darkest mx-auto mb-8 rounded-sm flex items-center justify-center shadow-lg">
          <span className="text-3xl font-bold text-pageBg">P</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-pencil-darkest mb-4 tracking-tight">
          Welcome to Pravaaha
        </h1>
        <p className="text-pencil-dark font-medium mb-12">
          Choose your preferred language to continue.
        </p>

        <div className="flex flex-col gap-4">
          <button 
            onClick={() => handleLanguageSelect('en')}
            className="w-full py-4 px-6 bg-pageBg border border-pencil-light/50 hover:border-accent-teal hover:shadow-md text-pencil-darkest font-semibold transition-all flex justify-between items-center group rounded-sm"
          >
            <span>English</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent-teal text-xl">→</span>
          </button>

          <button 
            onClick={() => handleLanguageSelect('hi')}
            className="w-full py-4 px-6 bg-pageBg border border-pencil-light/50 hover:border-accent-teal hover:shadow-md text-pencil-darkest font-semibold transition-all flex justify-between items-center group rounded-sm"
          >
            <span>Hinglish (Hindi/English)</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent-teal text-xl">→</span>
          </button>

          <button 
            onClick={() => handleLanguageSelect('bn')}
            className="w-full py-4 px-6 bg-pageBg border border-pencil-light/50 hover:border-accent-teal hover:shadow-md text-pencil-darkest font-semibold transition-all flex justify-between items-center group rounded-sm"
          >
            <span>Bengali (Romanized)</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent-teal text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}