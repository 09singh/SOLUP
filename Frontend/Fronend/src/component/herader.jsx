import React from 'react'
import { useNavigate } from 'react-router-dom';
import Sher from "../assets/sher.jpg"
function herader() {
    const navigate = useNavigate();
    return (
      
        <>
            
            <div className='bg-black flex  '>
                <div><img src={Sher} alt="lol"  className=' h-20 lg:h-26 md:ml-[25vw] -z-20' /></div>
                <h1 className=' mt-5 font-bold text-emerald-400 md:text-emerald-400 md:h-20 w-full md:text-5xl md:ml-[9vw] lg:mt-6'>BIZPILOT</h1>
                <div className=' flex space-x-5 md:flex md:space-x-5 md:text-center md:mt-3 lg:mr-3'>
                    <button className=" active:text-orange-500 text-amber-50 md:w-20 lg:mr-16  hover:text-orange-500 " onClick={()=>navigate("/")}>HOME</button>
                    <button className="  active:text-orange-500 text-amber-50 md:w-20 lg:mr-16  hover:text-orange-500 " onClick={()=>navigate("/Login")}> LOG IN</button>
                    <button className='  active:text-orange-500 text-amber-50 md:w-20 lg:mr-16 hover:text-orange-500 ' onClick={()=>navigate("/Signup")}>SIGN UP</button></div>
            </div>
            
      </>
  )
}

export default herader;