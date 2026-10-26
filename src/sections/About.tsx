import Reveal from '@/components/Reveal'
import { profile } from '@/data/profile'
import portraitImg from '@/assets/images/sargunan-portrait.jpg'

const CAPABILITIES = [
  'Embedded C / C11',
  'Firmware Validation',
  'State Machines',
  'RAG Systems',
  'LLM APIs',
  'n8n Automation',
]

const BACKGROUND_HIGHLIGHTS = [
  {
    role: 'AI & Automation Intern',
    org: 'InnerWhispers',
    period: 'Aug – Oct 2026',
    detail: 'Contributing to AI, automation, and frontend development initiatives.',
  },
  {
    role: 'Industrial Training',
    org: 'BSNL, Chennai',
    period: 'Jun – Jul 2025',
    detail: 'Hands-on exposure to telecom, optical fiber, and network operations.',
  },
  {
    role: 'B.Tech in ECE',
    org: 'SASTRA Deemed University',
    period: '2022 – 2026',
    detail: 'Electronics and Communication Engineering graduate.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="section-eyebrow mb-4">About</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-4xl sm:text-5xl font-display font-semibold tracking-tight mb-16 max-w-2xl">
            Who is Sargunan?
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-start">
          {/* Portrait as engineer-profile interface element */}
          <Reveal delay={0.1}>
            <div className="glass-panel rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none border border-cyan/20 rounded-2xl" />
              <div className="relative rounded-xl overflow-hidden mb-5 aspect-[4/5] bg-ink-900">
                <img
                  src={portraitImg}
                  alt="Portrait of Sargunan C"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  width={380}
                  height={475}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="space-y-3">
                <div>
                  <p className="font-display font-semibold text-lg leading-tight">
                    {profile.name}
                  </p>
                  <p className="font-mono text-xs text-cyan mt-1">
                    {profile.title}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['C11 Firmware', 'Validation', 'RAG / LLMs', 'n8n'].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded-md bg-white/5 text-paper-500 border border-ink-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-ink-600 mt-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-slow" />
                  <span className="font-mono text-[10px] uppercase tracking-wide text-paper-500">
                    Building Firmware & AI Systems
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal delay={0.15}>
              <p className="text-lg sm:text-xl text-paper-300 leading-relaxed max-w-xl">
                {profile.summary}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {CAPABILITIES.map((cap) => (
                  <div
                    key={cap}
                    className="glass-panel rounded-xl px-4 py-4 text-sm font-medium text-paper-100 hover:border-cyan/40 border border-transparent transition-colors"
                  >
                    {cap}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="pt-6 border-t border-ink-600">
                <p className="font-mono text-xs uppercase tracking-wide text-paper-500 mb-4">
                  Education & Practical Experience
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {BACKGROUND_HIGHLIGHTS.map((item) => (
                    <div key={item.org} className="rounded-xl p-4 border border-ink-600 bg-white/[0.02]">
                      <p className="font-mono text-[10px] text-cyan uppercase tracking-wide mb-1">
                        {item.period}
                      </p>
                      <p className="font-display font-medium text-sm text-paper-100 mb-0.5">
                        {item.role}
                      </p>
                      <p className="text-xs text-paper-500 mb-1">
                        {item.org}
                      </p>
                      <p className="text-[11px] text-paper-700 leading-normal">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
