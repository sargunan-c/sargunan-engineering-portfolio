import Reveal from '@/components/Reveal'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/profile'

export default function Projects() {
  const embeddedProjects = projects.filter((p) => p.track === 'embedded')
  const aiProjects = projects.filter((p) => p.track === 'ai')

  return (
    <section id="work" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="section-eyebrow mb-4">Engineering Portfolio</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-4xl sm:text-5xl font-display font-semibold tracking-tight mb-4 max-w-2xl">
            Selected Work & Systems
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-paper-500 max-w-xl mb-16">
            Two complementary engineering disciplines: deterministic embedded firmware and automated validation frameworks, alongside practical generative AI applications and workflow automation.
          </p>
        </Reveal>

        {/* Track A: Embedded Systems & Firmware */}
        <div className="mb-20">
          <Reveal delay={0.12}>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-8 border-b border-ink-600">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan" />
                <h3 className="text-2xl sm:text-3xl font-display font-semibold tracking-tight">
                  Embedded Systems & Firmware
                </h3>
              </div>
              <p className="font-mono text-xs text-paper-500">
                Modular C11 · Finite-State Machines · Automated Validation
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            {embeddedProjects.map((project, i) => (
              <Reveal key={project.id} delay={0.15 + i * 0.05}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Track B: AI & Software Engineering */}
        <div>
          <Reveal delay={0.12}>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-8 border-b border-ink-600">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-cyan" />
                <h3 className="text-2xl sm:text-3xl font-display font-semibold tracking-tight">
                  AI & Software Engineering
                </h3>
              </div>
              <p className="font-mono text-xs text-paper-500">
                RAG Systems · Structured LLM Pipelines · 3D Web Interfaces
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8">
            {aiProjects.map((project, i) => (
              <Reveal key={project.id} delay={0.15 + i * 0.05}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
