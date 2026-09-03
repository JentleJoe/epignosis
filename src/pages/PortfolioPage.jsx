import { Link } from 'react-router-dom'

const projectData = [
  {
    id: '01',
    title: 'Data Entry',
    category: 'Operations Support',
    summary: 'Clean, structured data workflows for fast-moving executive teams.',
    label: 'SHEETS',
    accent: 'from-[#80d0ff] to-[#5ea8ff]',
    platform: 'Google Sheets',
    items: ['Lead intake tracking', 'Database cleanup', 'Status monitoring']
  },
  {
    id: '02',
    title: 'Project Management',
    category: 'Workflow Design',
    summary: 'Clear task visibility, accountable owners, and progress tracking across projects.',
    label: 'TRELLO',
    accent: 'from-[#a7d6ff] to-[#7cb4ff]',
    platform: 'Trello',
    items: ['Task boards', 'Milestone tracking', 'Delivery visibility']
  },
  {
    id: '03',
    title: 'Email Management',
    category: 'Inbox Optimization',
    summary: 'Priority-first email systems that keep communication organized and responsive.',
    label: 'GMAIL',
    accent: 'from-[#c4d3ff] to-[#9ca9ff]',
    platform: 'Gmail',
    items: ['Inbox triage', 'Follow-up system', 'Priority labels']
  },
  {
    id: '04',
    title: 'Calendar Management',
    category: 'Scheduling',
    summary: 'Executive calendars aligned to priorities, deadlines, and strategic availability.',
    label: 'GOOGLE',
    accent: 'from-[#7ee7d7] to-[#6eb7ff]',
    platform: 'Google Calendar',
    items: ['Meeting coordination', 'Scheduling blocks', 'Time protection']
  },
  {
    id: '05',
    title: 'Travel Management',
    category: 'Logistics Coordination',
    summary: 'Travel planning, itinerary tracking, and trip logistics handled without friction.',
    label: 'FLIGHTS',
    accent: 'from-[#ffcb8a] to-[#ff9e7e]',
    platform: 'Travel Stack',
    items: ['Flight booking', 'Hotel coordination', 'Itinerary updates']
  },
  {
    id: '06',
    title: 'Customer Relationship Management',
    category: 'CRM Operations',
    summary: 'Accurate records, intelligent follow-up, and better communication across client touchpoints.',
    label: 'AIRTABLE',
    accent: 'from-[#ffb9ec] to-[#c0a2ff]',
    platform: 'Airtable',
    items: ['Client records', 'Pipeline updates', 'Stakeholder notes']
  }
]

const WorkCard = ({ project }) => {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_30px_70px_rgba(0,0,0,0.25)] overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#0d1320]/80 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-white/60">{project.platform}</div>
      </div>

      <div className="p-4 md:p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
            {project.category}
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">{project.id}</span>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.7fr_1fr]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#efefef] p-2 shadow-inner">
            <div className="rounded-xl border border-[#d9d9d9] bg-white p-2">
              <div className="mb-3 flex items-center gap-2 rounded-lg bg-[#f4f4f4] p-2 text-[10px] text-[#4d4d4d]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#d9d9d9]" />
                <span className="flex-1 rounded-md bg-white px-2 py-1 text-left">workstream / dashboard</span>
              </div>

              <div className="grid gap-2 sm:grid-cols-3">
                <div className="rounded-xl bg-[#e8f0ff] p-2">
                  <div className="mb-2 h-16 rounded-lg bg-[linear-gradient(135deg,#dfeaff,#b9d3ff)]" />
                  <div className="h-2 w-3/4 rounded bg-[#8eb2ff]" />
                  <div className="mt-2 h-2 w-1/2 rounded bg-[#d5e0ff]" />
                </div>
                <div className="rounded-xl bg-[#f1f7ff] p-2">
                  <div className="mb-2 h-16 rounded-lg bg-[linear-gradient(135deg,#dffaf7,#c3ecff)]" />
                  <div className="h-2 w-3/4 rounded bg-[#7fc8cc]" />
                  <div className="mt-2 h-2 w-1/2 rounded bg-[#d9f1f7]" />
                </div>
                <div className="rounded-xl bg-[#fff6e8] p-2">
                  <div className="mb-2 h-16 rounded-lg bg-[linear-gradient(135deg,#ffe8c9,#ffd39d)]" />
                  <div className="h-2 w-3/4 rounded bg-[#f4b05c]" />
                  <div className="mt-2 h-2 w-1/2 rounded bg-[#f7ddb4]" />
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {project.items.map((item, index) => (
                  <div key={item} className="flex items-center gap-2 rounded-lg bg-[#f7f7f7] p-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${index % 3 === 0 ? 'bg-[#3b82f6]' : index % 3 === 1 ? 'bg-[#34d399]' : 'bg-[#f59e0b]'}`} />
                    <span className="text-[10px] text-[#404040]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0b1220] p-4">
            <div>
              <div className={`inline-flex rounded-full bg-gradient-to-r ${project.accent} px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#0c111b]`}>
                {project.label}
              </div>
              <h3 className="mt-4 text-2xl font-black text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{project.summary}</p>
            </div>

            <div className="mt-5 space-y-2">
              {project.items.map((item) => (
                <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/3 px-2.5 py-2 text-[11px] text-white/75">
                  <span>{item}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(52,115,255,0.35),_rgba(12,18,30,0.95)_35%,_rgba(5,8,14,1)_100%)] text-white">
      <header className="border-b border-white/10 bg-[#0d1220]/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-primary">
            <span aria-hidden="true">←</span>
            Back to home
          </Link>

          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            Portfolio
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <section className="mb-12 md:mb-16">
          <div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
            Selected Work
          </div>

          <h1 className="text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
            Executive support systems built to reduce friction.
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
            From inbox and calendar operations to project tracking, travel planning, and CRM upkeep, these workflows are designed to help founders and executives move from busy to in control.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          {projectData.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </section>

        <section className="mt-16 rounded-[28px] border border-primary/20 bg-[#0b1220]/80 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">Support model</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white md:text-4xl">
                Calm operations for growing businesses.
              </h2>
            </div>

            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1247d8]"
            >
              Book a consultation
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PortfolioPage
