import Reveal from '@/components/Reveal'
import { skillGroups } from '@/data/profile'

export default function Skills() {
  const primary = skillGroups.filter((g) => g.emphasis)
  const secondary = skillGroups.filter((g) => !g.emphasis)

  return (
    <section id="skills" className="relative py-28 lg:py-36 grid-bg">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="section-eyebrow mb-4">Skills & Capabilities</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-4xl sm:text-5xl font-display font-semibold tracking-tight mb-4 max-w-2xl">
            Technical Competencies
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-paper-500 max-w-xl mb-16">
            Core capabilities spanning embedded software design, automated firmware verification, generative AI pipelines, and practical developer tooling.
          </p>
        </Reveal>

        {/* Primary Focus Areas */}
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {primary.map((group, i) => (
            <Reveal key={group.id} delay={0.1 + i * 0.05}>
              <div className="glass-panel rounded-2xl p-6 h-full border border-cyan/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-semibold text-cyan text-sm uppercase tracking-wide">
                      {group.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm px-3 py-1.5 rounded-lg bg-white/5 text-paper-100 border border-white/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Supporting Competencies & Fundamentals */}
        <div className="grid md:grid-cols-3 gap-5">
          {secondary.map((group, i) => (
            <Reveal key={group.id} delay={0.25 + i * 0.05}>
              <div className="rounded-2xl p-6 border border-ink-600 bg-white/[0.01] h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <h3 className="font-display font-medium text-paper-300 text-sm uppercase tracking-wide">
                      {group.label}
                    </h3>
                  </div>
                  {group.note && (
                    <p className="font-mono text-[10px] text-paper-500 uppercase tracking-wide mb-3">
                      {group.note}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm px-3 py-1.5 rounded-lg bg-white/[0.03] text-paper-300 border border-ink-600/40"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
