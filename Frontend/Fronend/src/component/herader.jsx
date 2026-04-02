import React from 'react'
import { useNavigate } from 'react-router-dom';
import Sher from "../assets/sher.jpg"

function herader() {
    const navigate = useNavigate();

    return (
        <header className='bg-black px-4 py-3 shadow-md'>
            <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4'>
                <div className='flex min-w-0 items-center gap-3'>
                    <img src={Sher} alt="BizPilot logo" className='h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16' />
                    <h1 className='text-2xl font-bold tracking-wide text-emerald-400 sm:text-3xl'>BIZPILOT</h1>
                </div>

                <div className='order-3 w-full sm:order-2 sm:w-auto sm:flex-1 sm:max-w-xs md:max-w-sm'>
                    <input
                        type="text"
                        placeholder="Search..."
                        className='w-full rounded-md border border-emerald-500 bg-white px-4 py-2 text-sm text-black outline-none focus:ring-2 focus:ring-emerald-400'
                    />
                </div>

                <nav className='order-2 flex flex-wrap items-center justify-center gap-3 text-sm font-medium sm:order-3 sm:gap-5'>
                    <button className='rounded px-3 py-2 text-amber-50 transition hover:text-orange-500' onClick={() => navigate("/")}>HOME</button>
                    <button className='rounded px-3 py-2 text-amber-50 transition hover:text-orange-500' onClick={() => navigate("/about")}>ABOUT</button>
                    <button className='rounded px-3 py-2 text-amber-50 transition hover:text-orange-500' onClick={() => navigate("/Login")}>LOG IN</button>
                    <button className='rounded px-3 py-2 text-amber-50 transition hover:text-orange-500' onClick={() => navigate("/Signup")}>SIGN UP</button>
                </nav>
            </div>
        </header>
    )
}

export default herader;
