import React from 'react'
import Service from './service';
import Brain from '../assets/brain.gif'

function body() {
    const scrollToServices = () => {
        const section = document.getElementById('services-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
      <>
          <section className='relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950'>
              <img
                src={Brain}
                alt="gif"
                className='absolute inset-0 h-full w-full object-cover opacity-60 blur-[1px]'
              />

              <div className='absolute inset-0 bg-black/45' />

              <div className='relative z-40 flex max-w-5xl flex-col items-center gap-6 px-4 py-16 text-center'>
                    <h1 className='bg-gradient-to-bl from-blue-500 via-white to-purple-500 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-6xl md:leading-tight lg:text-7xl'>
                      MANAGMENT <br /> SURVICES FOR <br /> DIFFERENT <br /> ENTERPRICES
                    </h1>

                    <div className='flex flex-wrap items-center justify-center gap-4'>
                        <button
                          className='rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-emerald-400 sm:text-base'
                        >
                          FREE TRAILS
                        </button>
                        <button
                          className='rounded-full border border-white bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-white hover:text-black sm:text-base'
                        >
                          REQUST TO DEMO
                        </button>
                    </div>
              </div>

              <div className=' fixed absolute bottom-5 right-4 z-50 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8'>
                  <button
                    className=' sticky fixed rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 px-5 py-2.5 text-base font-bold text-white shadow-lg transition hover:scale-105 hover:from-cyan-300 hover:to-blue-300 hover:text-slate-950 md:px-8 md:py-3 md:text-xl'
                    onClick={scrollToServices}>
                    AI ASSISTANT
                  </button>
              </div>
          </section>

          <Service />
      </>
  )
}

export default body
