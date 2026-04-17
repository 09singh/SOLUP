import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../config/api";

function Login({ data }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [error2, setError2] = useState(null);

  const validateForm = () => {
    if (!name || !password) {
      setError("Please fill in all fields.");
      return false;
    }
    setError("");
    return true;
  };

  const navigate = useNavigate();

  const sendData = async () => {
    try {
      const response = await fetch(API_ENDPOINTS.login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });

      const responseData = await response.json();
      setError2(responseData.message || "");

      if (typeof data === "function") {
        data({ name, password });
      }

      if (responseData.success) {
        localStorage.setItem("token", responseData.token);
        console.log(responseData.token);
        setName("");
        setPassword("");
        navigate("/management/sales");
        
      }
    } catch (fetchError) {
      setError2("Unable to log in. Please try again.");
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    await sendData();
  };
 
  return (
      <>
      <div className='flex justify-center items-center'>
        
              <div className='bg-white lg:h-96 lg:w-96  lg:mt-20 text-center rounded-2xl'>
          {error && <p className='text-red-500'>{error}</p>}
          {error2 && <p className='text-green-500'>{error2}</p>}
                <h1 className='lg:mt-4 lg:text-4xl'>LOG IN </h1>
                  <div className='lg:mt-9'>
                      <h2 className=''>USERNAME</h2>
            <input type="email"
              
                                placeholder='xyz@gmail.com'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
            />
            
          </div>
         
                  <div className='lg:mt-9'>
                      <h2>PASSWORD</h2>
                            <input type="password"
                                   placeholder='password'
                                   value ={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                    />
            
                </div>
                <div className='lg:mt-9'><button  onClick={submit} className=' lg:h-9 lg:w-16  bg-red-700 text-white hover:bg-red-300 hover:text-black'>log in</button></div>
              <footer className='lg:mt-9'><p>If you don't have an account?<button className='text-blue-500 hover:text-blue-950' onClick={()=>navigate("/signup")} >SIGN UP</button></p></footer>
              </div>
        </div>
      </>
  )
}

export default Login
