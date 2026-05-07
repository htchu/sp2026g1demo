interface IntroProps {
  t: {
    intro: {
      heading: string;
      body: string[];
    };
  };
}

export default function IntroSection({ t }: IntroProps) {
  return (
    <section id="intro" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-10 bg-indigo-600 rounded-full" />
          <h2 className="text-3xl font-bold text-gray-900">{t.intro.heading}</h2>
        </div>

        {/* Problem highlight box */}
        <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-r-2xl p-6 mb-10">
          <div className="flex items-start gap-3">
            <span className="text-2xl mt-0.5">⚠️</span>
            <p className="text-indigo-900 font-medium leading-relaxed">{t.intro.body[0]}</p>
          </div>
        </div>

        {/* Body paragraphs */}
        <div className="space-y-6">
          {t.intro.body.slice(1).map((para, i) => (
            <p key={i} className="text-gray-700 leading-8 text-base sm:text-lg">
              {para}
            </p>
          ))}
        </div>

        {/* Problem → Gap → Solution flow */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: '🚧', color: 'red', title: 'Problem', titleZh: '問題', desc: 'EFL students struggle to distinguish system keywords from user-defined variables in code.' },
            { icon: '🔍', color: 'amber', title: 'Gap', titleZh: '缺口', desc: 'Traditional IDEs and generic AI tools lack localized, pedagogical scaffolding.' },
            { icon: '💡', color: 'green', title: 'Solution', titleZh: '解方', desc: 'A multi-agent platform that parses syntax and provides native-language explanations.' },
          ].map((card) => (
            <div key={card.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-3">{card.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
