import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug).trim().toLowerCase();

  const project = projects.find((p) => p.slug.trim().toLowerCase() === slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-6 py-14">
      {/* Back */}
      <div className="flex items-center justify-between">
        <Link
          href="/#projects"
          className="text-sm text-slate-600 hover:text-slate-900"
        >
          ← Back to projects
        </Link>

        <div className="flex gap-4 text-sm">
          <Link className="text-slate-600 hover:text-slate-900" href="/#skills">
            Skills
          </Link>
          <Link className="text-slate-600 hover:text-slate-900" href="/#contact">
            Contact
          </Link>
          <a className="text-slate-600 hover:text-slate-900" href="/resume.pdf">
            Resume
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <span className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
            UI/UX Case Study
          </span>

          <p className="mt-4 text-sm text-slate-600">
            {project.company} • {project.role}
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900">
            {project.title}
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            {project.domain} • {project.dates}
          </p>

          <p className="mt-6 max-w-3xl text-slate-700 leading-relaxed">
            {project.oneLiner}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/#projects"
              className="rounded-xl bg-accent px-5 py-2 text-sm font-medium text-white hover:opacity-95"
            >
              View all case studies
            </Link>

            <a
              className="text-slate-600 hover:text-slate-900"
              href="/Koti_Abhishek_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Stack */}
        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">
            UI / Tech Stack
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
              >
                {s}
              </span>
            ))}
          </div>
        </aside>
      </header>

      {/* Sections */}

      <Section title="User Problem / UX Challenge">
        <Bullets items={project.problem} />
      </Section>

      <Section title="UX Solution & Design Approach">
        <Bullets items={project.solution} />
      </Section>

      <Section title="Frontend Architecture & UI Design">
        <Bullets items={project.architecture} />
      </Section>

      {project.architectureDiagram && (
        <Section title="UI Architecture / Component Design">
          <pre className="overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-5 text-xs leading-relaxed text-slate-800">
            {project.architectureDiagram}
          </pre>
        </Section>
      )}

      <Section title="Key Contributions">
        <Bullets items={project.contributions} />
      </Section>

      <Section title="Performance & UI Optimization">
        <Bullets items={project.securityQuality} />
      </Section>

      <Section title="User Impact & Experience Improvements">
        <Bullets items={project.impact} />
      </Section>

      <footer className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Abhishek Koti • UI/UX case-study portfolio
      </footer>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 max-w-5xl">
      <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {children}
      </div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700 leading-relaxed">
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}