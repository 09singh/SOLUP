import React from "react";
import { useNavigate } from "react-router-dom";

const serviceList = [
  {
    title: "Sales",
    description:
      "Track leads, manage customer orders, and improve daily sales performance with clear workflows.",
    accent: "from-orange-400 to-rose-500",
  },
  {
    title: "Inventory Management",
    description:
      "Monitor stock levels, reduce waste, and keep products available with better inventory control.",
    accent: "from-emerald-400 to-teal-600",
  },
  {
    title: "Accounting",
    description:
      "Organize transactions, manage invoices, and keep financial records accurate and easy to review.",
    accent: "from-sky-400 to-blue-600",
  },
  {
    title: "Purchase Management",
    description:
      "Handle vendor purchases, approvals, and supply planning so operations stay smooth and efficient.",
    accent: "from-violet-400 to-fuchsia-600",
  },
  {
    title: "Employee Management",
    description:
      "Manage employee details, attendance, and team coordination from one simple business dashboard.",
    accent: "from-amber-400 to-yellow-500",
  },
  {
    title: "Report and Analytics",
    description:
      "Turn business data into useful insights with reports that support faster and smarter decisions.",
    accent: "from-cyan-400 to-indigo-600",
  },
];

function Service() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Our Services
            </p>
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
              Business solutions for every important part of your company
            </h1>
            <p className="mt-4 max-w-2xl  text-slate-300 md:text-lg">
              Explore six core services designed to help teams manage work,
              improve visibility, and grow with confidence.
            </p>
          </div>

      
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceList.map((service, index) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
            >
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-lg font-bold text-white shadow-lg`}
              >
                {index + 1}
              </div>

              <h2 className="mb-3 text-2xl font-bold text-white">
                {service.title}
              </h2>
              <p className="text-sm leading-7 text-slate-300">
                {service.description}
              </p>

              <div className="mt-6 h-1 w-full rounded-full bg-white/10">
                <div
                  className={`h-1 rounded-full bg-gradient-to-r ${service.accent} transition-all duration-300 group-hover:w-full`}
                  style={{ width: "58%" }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
