interface Group { label: string; value: string; desc: string; }
interface Instrument { icon: string; name: string; desc: string; }
interface Method { name: string; desc: string; }
interface Stage { step: string; label: string; desc: string; }

interface MethoSection {
  number: string;
  title: string;
  body: string;
  highlight?: string;
  groups?: Group[];
  instruments?: Instrument[];
  methods?: Method[];
  stages?: Stage[];
}

interface MethodologyProps {
  t: {
    methodology: {
      heading: string;
      sections: MethoSection[];
    };
  };
}

export default function MethodologySection({ t }: MethodologyProps) {
  return (
    <section id="methodology" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1.5 h-10 bg-emerald-600 rounded-full" />
          <h2 className="text-3xl font-bold text-gray-900">{t.methodology.heading}</h2>
        </div>

        <div className="space-y-12">
          {t.methodology.sections.map((sec) => (
            <div key={sec.number} className="relative pl-8 border-l-2 border-gray-200">
              {/* Step number dot */}
              <div className="absolute -left-4 top-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow">
                {sec.number.split('.')[1]}
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <span className="text-indigo-500 font-mono text-base mr-2">{sec.number}</span>
                  {sec.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">{sec.body}</p>

                {sec.highlight && (
                  <div className="bg-indigo-600 text-white text-sm font-medium rounded-lg px-4 py-2 inline-block mb-5">
                    {sec.highlight}
                  </div>
                )}

                {/* Research groups */}
                {sec.groups && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {sec.groups.map((g) => (
                      <div key={g.label} className="bg-white border border-gray-200 rounded-xl p-4">
                        <div className="text-2xl font-bold text-indigo-600 mb-1">{g.value}</div>
                        <div className="font-semibold text-gray-900 text-sm mb-1">{g.label}</div>
                        <div className="text-gray-500 text-xs">{g.desc}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Instruments */}
                {sec.instruments && (
                  <div className="space-y-4 mt-4">
                    {sec.instruments.map((inst) => (
                      <div key={inst.name} className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl p-4">
                        <span className="text-2xl shrink-0">{inst.icon}</span>
                        <div>
                          <div className="font-semibold text-gray-900 mb-1">{inst.name}</div>
                          <div className="text-gray-600 text-sm leading-relaxed">{inst.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Methods */}
                {sec.methods && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {sec.methods.map((m) => (
                      <div key={m.name} className="bg-white border border-indigo-100 rounded-xl p-4">
                        <div className="font-bold text-indigo-700 mb-2 text-sm">{m.name}</div>
                        <div className="text-gray-600 text-sm leading-relaxed">{m.desc}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Two-stage scaffolding */}
                {sec.stages && (
                  <div className="mt-4 flex flex-col sm:flex-row gap-4 items-stretch">
                    {sec.stages.map((stage, idx) => (
                      <div key={stage.step} className="flex-1 flex flex-col">
                        <div className="bg-white border-2 border-indigo-200 rounded-2xl p-5 flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                              {stage.step}
                            </div>
                            <span className="font-bold text-gray-900">{stage.label}</span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{stage.desc}</p>
                        </div>
                        {idx < sec.stages!.length - 1 && (
                          <div className="hidden sm:flex items-center justify-center self-center my-2 text-indigo-400 text-xl">→</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
