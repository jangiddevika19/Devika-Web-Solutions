import { Code2, Coffee, Server, Database, Layers, Braces } from "lucide-react";

const SKILLS = [
  { icon: Code2, label: "React.js" },
  { icon: Coffee, label: "Java" },
  { icon: Server, label: "Spring Boot" },
  { icon: Database, label: "MySQL" },
  { icon: Layers, label: "Tailwind CSS" },
  { icon: Braces, label: "REST APIs" },
];

const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "3+", label: "Years Learning Experience" },
  { value: "100%", label: "Responsive Solutions" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-slate-50/60 py-24 sm:py-28"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-1/2 top-10 h-[420px] w-[680px] translate-x-1/3 rounded-full bg-gradient-to-b from-sky-100/60 via-sky-50/30 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12">

        {/* IMAGE */}
        <div className="relative mx-auto w-full max-w-sm lg:mx-0">

          <div
            className="
              relative z-10 overflow-hidden rounded-3xl border border-slate-200
              bg-white shadow-[0_20px_60px_rgba(15,23,42,0.1)]
              transition-transform duration-500 hover:-translate-y-1
            "
          >
            <img
              src="/devika.jpeg"
              alt="Devika Jangid"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>


          {/* floating chip */}
          <div
            className="
              absolute -bottom-6 -right-4 z-20 flex items-center gap-2.5 rounded-2xl
              border border-slate-200 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.1)]
              transition-transform duration-300 hover:-translate-y-1
              sm:-right-8
            "
          >

            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
              <Code2 className="h-4 w-4" />
            </span>

            <div className="leading-tight">
              <p className="text-xs font-semibold text-slate-900">
                Available for freelance
              </p>

              <p className="text-[11px] text-slate-600">
                Currently accepting projects
              </p>
            </div>

          </div>


          <div className="absolute inset-0 -z-10 translate-y-6 scale-95 rounded-3xl bg-sky-100/60 blur-3xl" />

        </div>



        {/* CONTENT */}
        <div className="text-left">

          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-700 shadow-sm">
            About Me
          </span>


          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Devika Jangid
          </h2>


          <p className="mt-2 text-sm font-semibold text-sky-700 sm:text-base">
            Java Full Stack Developer &amp; Freelance Web Developer
          </p>


          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700">
            I create modern websites and scalable web applications that help
            businesses grow online. My focus is clean design, efficient code
            and reliable digital solutions.
          </p>



          {/* skill badges */}
          <div className="mt-8 flex flex-wrap gap-2.5">

            {SKILLS.map(({ icon: Icon, label }) => (

              <span
                key={label}
                className="
                  inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3.5 py-1.5
                  text-xs font-semibold text-sky-800 ring-1 ring-sky-100
                  transition-colors duration-300 hover:bg-sky-100
                "
              >

                <Icon className="h-3.5 w-3.5" />

                {label}

              </span>

            ))}

          </div>



         {/* stats */}
<div className="mt-12 grid grid-cols-3 border-t border-slate-200 pt-8">

  {STATS.map((stat, i) => (

    <div
      key={stat.label}
      className={`
        flex min-w-0 flex-col
        ${i > 0 ? "border-l border-slate-200 pl-3 sm:pl-6" : ""}
        ${i < STATS.length - 1 ? "pr-3 sm:pr-6" : ""}
      `}
    >

      <p className="text-xl font-bold tracking-tight text-slate-950 sm:text-3xl">
        {stat.value}
      </p>

      <p className="mt-1 text-[10px] font-medium leading-snug text-slate-700 sm:text-xs">
        {stat.label}
      </p>

    </div>

  ))}

</div>


        </div>

      </div>
    </section>
  );
}