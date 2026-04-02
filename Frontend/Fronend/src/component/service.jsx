import React, { useEffect, useRef, useState } from "react";

const services = [
  {
    id: "01",
    title: "Sales",
    text: "Track leads and close deals with a cleaner workflow.",
    accent: "from-orange-400 to-rose-500",
  },
  {
    id: "02",
    title: "Inventory",
    text: "Manage stock and movement with better clarity.",
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    id: "03",
    title: "Finance",
    text: "Keep invoices, payments, and records in one place.",
    accent: "from-sky-400 to-indigo-500",
  },
  {
    id: "04",
    title: "Purchase",
    text: "Handle vendors and approvals without extra friction.",
    accent: "from-fuchsia-400 to-pink-500",
  },
  {
    id: "05",
    title: "HR",
    text: "Organize people, attendance, and team operations.",
    accent: "from-amber-300 to-orange-500",
  },
  {
    id: "06",
    title: "Reports",
    text: "Turn daily activity into fast, useful insights.",
    accent: "from-cyan-400 to-blue-600",
  },
];

function ServiceIcon({ index }) {
  const common = "h-6 w-6 text-white";

  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M5 17L10 12L13 15L19 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 8H19V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M4.5 8.5L12 4L19.5 8.5L12 13L4.5 8.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M4.5 15.5L12 20L19.5 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 13V20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M5 19H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7 15V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 15V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M17 15V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M4 7H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7 12H17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M10 17H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 4:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M5 20C5.8 16.8 8.5 15 12 15C15.5 15 18.2 16.8 19 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M5 18L9.5 13.5L12.5 16.5L19 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 10H19V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

function Service() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    let revealTimer;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealTimer = window.setTimeout(() => {
            setVisible(true);
          }, 500);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (revealTimer) {
        window.clearTimeout(revealTimer);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07111f] px-5 py-20 text-white md:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.14),transparent_24%),linear-gradient(180deg,#07111f_0%,#0b1830_50%,#060d18_100%)]" />
      <div className="absolute left-10 top-20 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-16 right-10 h-32 w-32 rounded-full bg-orange-400/10 blur-3xl animate-pulse" />

      <div className="relative mx-auto max-w-6xl">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-500 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Our Services
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Simple, modern, and built to look sharp.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            Six clean service cards with soft glow, smooth motion, and a premium feel.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-white/20 ${
                visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
             
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.accent}`} />
              <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${service.accent} opacity-20 blur-3xl transition duration-500 group-hover:opacity-35`} />

              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} shadow-lg`}>
                <ServiceIcon index={index} />
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <span className="text-sm font-semibold text-slate-400">{service.id}</span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                {service.text}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">
                  Smart Module
                </span>
                <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-slate-950">
                  Explore
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
