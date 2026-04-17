import React from 'react'
import Image from "../assets/dash.png"
function Dashboard() {
  return (
    <section className="bg-slate-950 px-5 py-20 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
          <div className="absolute inset-3 z-10 rounded-[1.35rem] bg-slate-950/55" />
          <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                Run Your Entire Business From One Dashboard
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-200 md:text-lg">
                Manage sales, inventory, finance, HR, and reports in one powerful platform.
              </p>
            </div>
          </div>
          <img
            src={Image}
            alt="Dashboard"
            className="h-full w-full rounded-[1.35rem] object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Dashboard
