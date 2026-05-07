interface HeroProps {
  t: {
    hero: {
      conference: string;
      title: string;
      subtitle: string;
      cta: string;
    };
  };
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-800 to-violet-700">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        {/* Conference badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="text-yellow-300 text-sm">★</span>
          <span className="text-white/90 text-sm font-medium">{t.hero.conference}</span>
        </div>

        {/* Main title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-indigo-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* CTA */}
        <a
          href="#intro"
          className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-50 hover:shadow-xl transition-all duration-200 text-base"
        >
          {t.hero.cta}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { value: '100', label: 'Students' },
            { value: '8', label: 'Weeks' },
            { value: '3', label: 'AI Agents' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="text-indigo-300 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
