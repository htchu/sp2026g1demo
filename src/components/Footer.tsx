interface FooterProps {
  t: {
    footer: { text: string };
    nav: Record<string, string>;
  };
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🤖</span>
            <div>
              <div className="text-white font-bold text-sm">ICFI 2026</div>
              <div className="text-gray-500 text-xs">AI Agent Learning Platform</div>
            </div>
          </div>

          <div className="flex gap-6 text-sm">
            {[
              { label: t.nav.intro, href: '#intro' },
              { label: t.nav.literature, href: '#literature' },
              { label: t.nav.methodology, href: '#methodology' },
              { label: t.nav.references, href: '#references' },
            ].map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs text-gray-600">
          {t.footer.text}
        </div>
      </div>
    </footer>
  );
}
