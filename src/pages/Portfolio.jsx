import { ExternalLink, Coffee, UtensilsCrossed, Cookie, Plane } from "lucide-react";

const PROJECTS = [
  {
    icon: Coffee,
    title: "Coffee Shop Website",
    description:
      "A modern coffee shop website with elegant UI, product showcase, responsive layout and smooth user experience.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    demo: "https://ember-coffee-delta.vercel.app/",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant Website",
    description:
      "A premium restaurant website featuring beautiful sections, menu presentation and responsive design.",
    tech: ["React.js", "Tailwind CSS"],
    demo: "https://aurelia-restaurant-psi.vercel.app/",
  },
  {
    icon: Cookie,
    title: "Bakery Website",
    description:
      "A creative bakery website with attractive visuals, product sections and modern responsive design.",
    tech: ["React.js", "Tailwind CSS"],
    demo: "https://sweet-crumbs-ashen.vercel.app/",
  },
  {
    icon: Plane,
    title: "Travel Website",
    description:
      "A modern travel website with destination sections, engaging layouts and responsive user experience.",
    tech: ["React.js", "Tailwind CSS"],
    demo: "https://nomad-horizon-seven.vercel.app/",
  },
];

function ProjectCard({ icon: Icon, title, description, tech, demo }) {
  return (
    <div
      className="
        group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200
        bg-white shadow-[0_2px_10px_rgba(15,23,42,0.04)]
        transition-all duration-300 ease-out
        hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)]
      "
    >
      {/* image placeholder */}
      <div
        className="
          relative flex h-44 w-full items-center justify-center overflow-hidden
          bg-gradient-to-br from-slate-50 via-sky-50/60 to-slate-100
        "
      >
        <div
          className="
            absolute inset-0 opacity-[0.35]
            [background-image:radial-gradient(circle,rgba(15,23,42,0.08)_1px,transparent_1px)]
            [background-size:16px_16px]
          "
        />
        <span
          className="
            relative flex h-14 w-14 items-center justify-center rounded-2xl
            bg-white text-sky-600 shadow-[0_8px_20px_rgba(15,23,42,0.08)] ring-1 ring-slate-100
            transition-transform duration-300 group-hover:scale-110
          "
        >
          <Icon className="h-6 w-6" />
        </span>
      </div>

      {/* content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-base font-semibold tracking-tight text-slate-900">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          {description}
        </p>

        {/* tech badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-medium text-sky-700 ring-1 ring-sky-100"
            >
              {item}
            </span>
          ))}
        </div>

        {/* action */}
        <div className="mt-6 border-t border-slate-100 pt-5">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group/demo inline-flex w-full items-center justify-center gap-1.5 rounded-full
              bg-slate-900 px-4 py-2.5 text-xs font-semibold tracking-tight text-white
              shadow-[0_1px_0_rgba(255,255,255,0.15)_inset,0_6px_16px_rgba(15,23,42,0.2)]
              transition-all duration-300
              hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_10px_22px_rgba(15,23,42,0.28)]
              active:translate-y-0 active:scale-[0.98]
            "
          >
            View Live Website
            <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 sm:py-28">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/2 top-0 h-[420px] w-[720px] translate-x-1/3 rounded-full bg-gradient-to-b from-sky-100/60 via-sky-50/30 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium tracking-wide text-slate-500 shadow-sm">
            Portfolio
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-500">
            A collection of modern websites and digital experiences designed
            and developed with clean code.
          </p>
        </div>

        {/* Project grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}