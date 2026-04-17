import React from "react";

function About() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.2),_transparent_30%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm sm:p-10">
            <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
              About The Platform
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              One ERP platform to simplify operations and scale smarter
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              Our ERP platform helps startups, MSMEs, and growing businesses
              manage sales, inventory, finance, purchasing, HR, and analytics
              from one unified system. Built for modern teams, it reduces
              manual work, streamlines daily operations, and gives business
              owners a complete real-time view of their company through a
              single dashboard. With automated workflows, accurate reporting,
              and actionable insights, teams can save time, make faster
              data-driven decisions, and stay focused on growth with more
              control, clarity, and efficiency across the business.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Core Value
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                Complete visibility in one dashboard
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                Built For
              </p>
              <p className="mt-3 text-lg leading-7 text-slate-100">
                Startups, MSMEs, and growing businesses that need speed,
                structure, and smarter decision-making.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                Business Impact
              </p>
              <p className="mt-3 text-lg leading-7 text-slate-100">
                Less manual effort, faster reporting, and more confidence in
                every operational decision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
