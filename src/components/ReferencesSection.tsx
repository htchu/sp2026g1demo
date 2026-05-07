interface RefItem { apa: string; doi: string; }

interface ReferencesProps {
  t: {
    references: {
      heading: string;
      items: RefItem[];
    };
  };
}

export default function ReferencesSection({ t }: ReferencesProps) {
  return (
    <section id="references" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-10 bg-rose-500 rounded-full" />
          <h2 className="text-3xl font-bold text-gray-900">{t.references.heading}</h2>
        </div>

        <div className="space-y-5">
          {t.references.items.map((ref, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <span className="text-gray-400 font-mono text-sm shrink-0 mt-0.5 w-6">
                  [{i + 1}]
                </span>
                <div>
                  <p className="text-gray-800 text-sm leading-relaxed mb-2">{ref.apa}</p>
                  <a
                    href={ref.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 text-xs font-medium transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {ref.doi.replace('https://doi.org/', 'DOI: ')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
