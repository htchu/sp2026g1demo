interface Feature { icon: string; title: string; desc: string; }

interface PlatformProps {
  t: {
    platform: {
      heading: string;
      description: string;
      features: Feature[];
    };
  };
}

export default function PlatformSection({ t }: PlatformProps) {
  return (
    <section id="platform" className="py-24 bg-gradient-to-br from-indigo-950 to-violet-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.platform.heading}</h2>
          <p className="text-indigo-300 text-lg max-w-2xl mx-auto">{t.platform.description}</p>
        </div>

        {/* Architecture diagram (visual) */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 mb-12">
          <div className="flex flex-col items-center gap-4">
            {/* Student input */}
            <div className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-center w-full max-w-sm">
              <div className="text-2xl mb-1">👨‍💻</div>
              <div className="text-white font-semibold">Student Code Input</div>
              <div className="text-indigo-300 text-xs mt-1">Python / Pseudo-code</div>
            </div>

            <div className="text-indigo-400 text-2xl">↓</div>

            {/* Multi-agent core */}
            <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: '🔍', label: 'Syntax Parser Agent', color: 'from-blue-600/30 to-blue-700/20' },
                { icon: '🌐', label: 'Localization Agent', color: 'from-violet-600/30 to-violet-700/20' },
                { icon: '🛠️', label: 'Diagnostic Agent', color: 'from-emerald-600/30 to-emerald-700/20' },
              ].map((agent) => (
                <div key={agent.label} className={`bg-gradient-to-b ${agent.color} border border-white/20 rounded-xl p-4 text-center`}>
                  <div className="text-2xl mb-2">{agent.icon}</div>
                  <div className="text-white text-sm font-medium">{agent.label}</div>
                </div>
              ))}
            </div>

            <div className="text-indigo-400 text-2xl">↓</div>

            {/* Output */}
            <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '🎨', label: 'Visual Syntax Highlighting', sub: 'Keywords vs. Variables' },
                { icon: '💬', label: 'Native-Language Feedback', sub: 'Localized explanations' },
              ].map((out) => (
                <div key={out.label} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-xl mb-1">{out.icon}</div>
                  <div className="text-white font-medium text-sm">{out.label}</div>
                  <div className="text-indigo-300 text-xs mt-1">{out.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.platform.features.map((f) => (
            <div
              key={f.title}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-200"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-white font-bold mb-2">{f.title}</h3>
              <p className="text-indigo-300 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
