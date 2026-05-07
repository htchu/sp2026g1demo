interface LitSection {
  number: string;
  title: string;
  body: string;
  refs: string[];
}

interface LiteratureProps {
  t: {
    literature: {
      heading: string;
      sections: LitSection[];
    };
  };
}

const colors = [
  { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700', num: 'text-blue-600' },
  { bg: 'bg-amber-50', border: 'border-amber-200', badge: 'bg-amber-100 text-amber-700', num: 'text-amber-600' },
  { bg: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700', num: 'text-emerald-600' },
];

export default function LiteratureSection({ t }: LiteratureProps) {
  return (
    <section id="literature" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-10 bg-violet-600 rounded-full" />
          <h2 className="text-3xl font-bold text-gray-900">{t.literature.heading}</h2>
        </div>

        <div className="space-y-8">
          {t.literature.sections.map((sec, i) => {
            const c = colors[i % colors.length];
            return (
              <div key={sec.number} className={`${c.bg} border ${c.border} rounded-2xl p-6 sm:p-8`}>
                <div className="flex items-start gap-4">
                  <span className={`text-2xl font-bold ${c.num} font-mono shrink-0 mt-1`}>
                    {sec.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{sec.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{sec.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {sec.refs.map((ref) => (
                        <span key={ref} className={`text-xs px-2.5 py-1 rounded-full font-medium ${c.badge}`}>
                          📄 {ref}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Theory tags */}
        <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Theoretical Frameworks
          </h4>
          <div className="flex flex-wrap gap-3">
            {[
              "Sweller's Cognitive Load Theory",
              "Vygotsky's Zone of Proximal Development",
              "Intelligent Tutoring Systems (ITS)",
              "Agentic AI Architecture",
            ].map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
