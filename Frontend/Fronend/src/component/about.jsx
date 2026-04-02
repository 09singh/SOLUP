import React from "react";

function About() {
  return (
    <section className="min-h-full bg-gray-900 px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl rounded-2xl border border-emerald-500/40 bg-black/40 p-8 shadow-lg">
        <h2 className="mb-4 text-3xl font-bold text-emerald-400">About BizPilot</h2>
        <p className="text-lg leading-8 text-gray-200">
          BizPilot helps teams organize services, manage customer journeys, and
          build a smoother business workflow from one place.
        </p>
      </div>
    </section>
  );
}

export default About;
