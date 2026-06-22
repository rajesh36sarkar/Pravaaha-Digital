export default function Footer({ t }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t pt-16 pb-8 mt-auto"
      style={{
        backgroundColor: 'var(--theme-glass, rgba(255,255,255,0.05))',
        backdropFilter: 'blur(8px)',
        borderColor: 'var(--theme-border, rgba(255,255,255,0.1))',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-2 tracking-tight drop-shadow"
          style={{ color: 'var(--theme-text-main)' }}>
          Pravaaha Digital
        </h2>
        <p className="text-sm mb-8 text-center max-w-md drop-shadow"
          style={{ color: 'var(--theme-text-muted)' }}>
          Your Digital Address. Your Bengal. Your Future. Elevating small businesses with affordable, premium web solutions.
        </p>
        
        <div className="w-full my-6" style={{ borderTop: '1px solid var(--theme-border)' }} />
        
        <div className="flex flex-col md:flex-row w-full justify-between items-center gap-4 text-xs font-medium"
          style={{ color: 'var(--theme-text-muted)' }}>
          <p>&copy; {currentYear} Pravaaha Digital. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:opacity-70">Privacy Policy</a>
            <a href="#" className="transition-colors hover:opacity-70">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}