import { profile } from '@/data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-ink-600 py-10">
      <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-paper-700">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-xs text-paper-500 hover:text-cyan transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-paper-500 hover:text-cyan transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-paper-500 hover:text-cyan transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
