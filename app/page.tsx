import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-14">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-slate-600">
          <span className="font-semibold text-slate-900">Case Study</span>{" "}
          Portfolio
        </div>

        <div className="flex gap-4 text-sm">
          <a className="text-slate-600 hover:text-slate-900" href="#projects">
            Projects
          </a>
          <a className="text-slate-600 hover:text-slate-900" href="#skills">
            Skills
          </a>
          <a className="text-slate-600 hover:text-slate-900" href="#contact">
            Contact
          </a>
          <a className="text-slate-600 hover:text-slate-900" href="/resume.pdf">
            Resume
          </a>
        </div>
      </div>

      {/* Hero */}
<header className="mt-12 grid gap-10 md:grid-cols-2 md:items-center">
  <div>
    <p className="text-sm text-slate-600">
      Senior UI/UX Engineer • 8+ Years • React / TypeScript / UX / AI UI
    </p>

    <h1 className="mt-3 text-5xl font-semibold tracking-tight">
      Abhishek <span className="text-accent">Koti</span>
    </h1>

    {/* NEW ROLE TITLE */}
    <h2 className="mt-3 text-2xl font-medium text-slate-800">
      Senior UI/UX Engineer | React & TypeScript
    </h2>

    {/* UPDATED DESCRIPTION */}
    <p className="mt-5 max-w-xl leading-relaxed text-slate-700">
      I build scalable, high-performance web applications with a strong focus on
      intuitive user experience, developer workflows, and modern UI systems.
      I specialize in designing workflow-driven platforms such as developer
      portals, CI/CD dashboards, and real-time applications.
      <span className="font-medium text-slate-900">
        {" "}
        My work focuses on UX, performance, and intelligent UI patterns.
      </span>
    </p>

    {/* TAGS ADDED */}
    <div className="mt-5 flex flex-wrap gap-3">
      {["React", "TypeScript", "UX Design", "AI UI", "Developer Experience"].map(
        (tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
          >
            {tag}
          </span>
        )
      )}
    </div>

    <div className="mt-7 flex flex-wrap gap-3">
      <a
        href="#projects"
        className="rounded-xl bg-accent px-5 py-2 text-sm font-medium text-white hover:opacity-95"
      >
        View Case Studies
      </a>

      <a
        href="/resume.pdf"
        className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm text-slate-800 hover:bg-slate-50"
      >
        Download Resume
      </a>

      <a
        href="mailto:abhishekkoti2122@gmail.com"
        className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm text-slate-800 hover:bg-slate-50"
      >
        Email
      </a>
    </div>

    <p className="mt-6 text-sm text-slate-600">
      Phone: <span className="text-slate-900">(516) 324-3489</span> • Email:{" "}
      <span className="text-slate-900">abhishekkoti2122@gmail.com</span>
    </p>
  </div>

  {/* Highlights */}
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <p className="text-sm font-semibold text-slate-900">Highlights</p>

    <div className="mt-4 grid gap-3">
      <Highlight
        title="Frontend & UI"
        body="React 18/19, TypeScript, Redux Toolkit, React Query, Hooks, scalable component-driven UI development."
      />
      <Highlight
        title="UX & Design"
        body="Figma, design systems, wireframing, UX workflows, developer portals, CI/CD dashboards, usability optimization."
      />
      <Highlight
        title="Performance & Real-Time"
        body="Code splitting, lazy loading, memoization, WebSockets, Server-Sent Events (SSE), high-performance UI systems."
      />
      <Highlight
        title="AI & Modern UI"
        body="Copilot-style interfaces, LLM integrations, agent workflows, intelligent UI interactions."
      />
    </div>
  </div>
</header>

      {/* Projects */}
      <section id="projects" className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Case Studies</h2>
            <p className="mt-1 text-sm text-slate-600">
              Click a project to view full problem → architecture → impact.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          {projects.map((p, idx) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                      {idx === 0 ? "Recent" : "Case Study"}
                    </span>
                    <span className="text-sm text-slate-600">{p.company}</span>
                  </div>

                  <h3 className="mt-2 text-xl font-semibold text-slate-900 group-hover:text-accent">
                    {p.title}
                  </h3>

                  <p className="mt-2 max-w-4xl text-slate-700">{p.oneLiner}</p>
                </div>

                <div className="mt-2 text-sm text-slate-500 md:mt-0">
                  {p.dates}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.slice(0, 10).map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mt-16 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
      >
        <h2 className="text-2xl font-semibold text-slate-900">
          Let’s connect
        </h2>

        <p className="mt-3 max-w-2xl text-slate-700 leading-relaxed">
          Want a walkthrough deck, architecture diagram, or code sample links?
          Reach out and I’ll share details.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <a
            href="mailto:abhishekkoti2122@gmail.com"
            className="rounded-xl bg-accent px-5 py-2 font-medium text-white hover:opacity-95"
          >
            Email Me
          </a>

          <a
            href="/resume.pdf"
            className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-slate-800 hover:bg-slate-50"
          >
            Resume
          </a>
        </div>
      </section>

      <footer className="mt-14 pb-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Abhishek Koti • Case-study portfolio
      </footer>
    </main>
  );
}

function Highlight({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-slate-700 leading-relaxed">{body}</p>
    </div>
  );
}
