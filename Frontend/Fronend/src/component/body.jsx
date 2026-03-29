import React from 'react'
import { useNavigate } from 'react-router-dom';
import Brain from '../assets/brain.gif'
function body() {
    const navigate = useNavigate();
  return (
      <>
          <div className='relative flex h-full min-h-0 items-center justify-center overflow-hidden bg-slate-950'>
              <img
                src={Brain}
                alt="gif"
                className='absolute inset-0 h-full w-full object-cover opacity-25 blur-[1px]'
              />

              <div className='absolute inset-0 bg-black/45' />

              <div className='absolute inset-0 flex items-center justify-center px-4'>
                    <h1 className='z-40 bg-gradient-to-bl from-blue-500 via-white to-purple-500 bg-clip-text text-center text-3xl leading-tight font-bold text-transparent sm:text-4xl md:text-6xl md:leading-tight lg:text-7xl'>
                      MANAGMENT <br /> SURVICES FOR <br /> DIFFERENT <br /> ENTERPRICES
                    </h1>
              </div>

              <div className='absolute bottom-5 right-4 z-50 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8'>
                  <button
                    className='rounded-full bg-gradient-to-br from-red-500 to-orange-400 px-5 py-2.5 text-base font-bold text-white shadow-lg transition hover:scale-105 hover:from-amber-50 hover:to-red-100 hover:text-red-600 md:px-8 md:py-3 md:text-xl'
                    onClick={()=>{navigate("/service")}}>
                    SERVICE
                  </button>
              </div>
          </div>
         
      </>
  )
}

export default body
