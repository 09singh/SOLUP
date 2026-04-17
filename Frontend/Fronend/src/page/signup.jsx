import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS } from '../config/api';
function Signup() {
  const [Data, setData] = useState({
    name: "", 
    password: "",
    confirmpassword: "",
  });
  const [error, setError] = useState(null);
  const Handel = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });

  };
  const validateForm = () => {
    if (!Data.name || !Data.password || !Data.confirmpassword) {
      setError("Please fill in all fields.");
      return false;
    } else if (Data.password !== Data.confirmpassword) {
      setError("Passwords do not match.");
      setData({name:"", passwoard: "", confirmpassword: "" });
      return false;
    } else {
      setError("");
      return true;
    }
  }
    const Senddata = async () => {
      const response = await
        fetch(API_ENDPOINTS.signup, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: Data.name, password: Data.password, confirmpassword: Data.confirmpassword }),
      })
      const data = await response.json();
      console.log(data);
    }
    const submit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      
      Senddata();
      setData({ name: "", password: "", confirmpassword: "" });
      
    }
    const navigate = useNavigate();
    return (
      <>
        <form onSubmit={submit}>
        
        <div className='flex justify-center items-center'>
          <div className='bg-white lg:h-[75vh] lg:w-96  lg:mt-13 text-center rounded-2xl'>
                  {error && <p className='text-red-500'>{error}</p> }
            <h1 className='lg:mt-4 lg:text-4xl'>SIGN UP </h1>
            <div className='lg:mt-9'>
              <h2 className=''>USERNAME</h2>
              <input
                type="email"
                name="name"
                placeholder='xyz@gmail.com'
                value={Data.name}
                onChange={Handel}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>
                  
            <div className='lg:mt-9'>
              <h2>PASSWORD</h2>
              <input type="password"
                name="password"
                placeholder='password'
                value={Data.password}
                onChange={Handel} />
            </div>
            <div className='lg:mt-9'>
              <h2>CONFIRM PASSWORD</h2>
              <input type="password"
                name="confirmpassword"
                placeholder='confirm password'
                value={Data.confirmpassword}
                onChange={Handel} />
            </div>
            <div className='lg:mt-9'><button className=' lg:h-9 lg:w-16  bg-red-700 text-white hover:bg-red-300 hover:text-black' type='submit'>SIGN UP</button></div>
            <footer className='lg:mt-9'><p>If you alredy have account?<button className='text-blue-500 hover:text-blue-950 ' onClick={() => navigate("/Login")} >LOG IN</button></p></footer>
          </div>
              
          </div>
          </form>
      </>
    )
  }


  export default Signup
