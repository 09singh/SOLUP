import React from "react";

const SalesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
    <path d="M4 17 10 11l4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 8h4v4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 20h16" strokeLinecap="round" />
  </svg>
);

const InventoryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
    <path d="M12 3 4 7l8 4 8-4-8-4Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 12l8 4 8-4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 17l8 4 8-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FinanceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
    <path d="M12 3v18" strokeLinecap="round" />
    <path d="M16.5 7.5c0-1.7-1.8-3-4-3s-4 1.3-4 3 1.2 2.6 4 3 4 1.3 4 3-1.8 3-4 3-4-1.3-4-3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PurchaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
    <path d="M6 6h15l-1.5 7.5H8L6 6Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 6 5 3H3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="19" r="1.5" />
    <circle cx="18" cy="19" r="1.5" />
  </svg>
);

const HrIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5" strokeLinecap="round" />
    <path d="M14 18c.4-1.9 1.9-3.3 4-3.3 1.3 0 2.4.4 3 1.3" strokeLinecap="round" />
  </svg>
);

const ReportsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7">
    <path d="M5 19V9" strokeLinecap="round" />
    <path d="M12 19V5" strokeLinecap="round" />
    <path d="M19 19v-7" strokeLinecap="round" />
    <path d="M4 19h16" strokeLinecap="round" />
  </svg>
);

const services = [
  {
    id: "01",
    title: "Sales",
    text: "Track leads and close deals with a cleaner workflow.",
    accent: "from-orange-400 to-rose-500",
    icon: SalesIcon,
  },
  {
    id: "02",
    title: "Inventory",
    text: "Manage stock and movement with better clarity.",
    accent: "from-emerald-400 to-cyan-500",
    icon: InventoryIcon,
  },
  {
    id: "03",
    title: "Finance",
    text: "Keep invoices, payments, and records in one place.",
    accent: "from-sky-400 to-indigo-500",
    icon: FinanceIcon,
  },
  {
    id: "04",
    title: "Purchase",
    text: "Handle vendors and approvals without extra friction.",
    accent: "from-fuchsia-400 to-pink-500",
    icon: PurchaseIcon,
  },
  {
    id: "05",
    title: "HR",
    text: "Organize people, attendance, and team operations.",
    accent: "from-amber-300 to-orange-500",
    icon: HrIcon,
  },
  {
    id: "06",
    title: "Reports",
    text: "Turn daily activity into fast, useful insights.",
    accent: "from-cyan-400 to-blue-600",
    icon: ReportsIcon,
  },
];


function Service() {
 

  return (
    <section
      
      className="relative overflow-hidden bg-[#07111f] px-5 py-20 text-white md:px-8"
    >
     
      <div className="relative mx-auto max-w-6xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Our Services
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            All-in-One ERP Modules
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            Sales, inventory, finance, purchasing, HR, and reports in one unified platform. Designed to reduce manual work, streamline operations, and give you a complete real-time view of your business through a single dashboard. With automated workflows, accurate reporting, and actionable insights, our ERP modules help you save time, make faster data-driven decisions, and stay focused on growth with more control, clarity, and efficiency across your entire business.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-white/20 `}
                style={{ transitionDelay: `${index * 45}ms` }}
              >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.accent}`} />
              <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${service.accent} opacity-20 blur-3xl transition duration-500 group-hover:opacity-35`} />

              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}>
                <Icon />
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <span className="text-sm font-semibold text-slate-400">{service.id}</span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                {service.text}
              </p>

              <div className="mt-6 flex items-center">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">
                  Smart Module
                </span>
              </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Service;
