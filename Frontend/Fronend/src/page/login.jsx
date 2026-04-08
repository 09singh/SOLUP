import { React ,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
function login({data}) {
  const [name, setname] = useState("")
  const [password, setpassword] = useState("")
  const [error, seterror] = useState(null);
 
  const validateForm = () => {
    if (!name || !password) {
      seterror("Please fill in all fields.");
      return false;
    }
    seterror("");
    return true;
  };

  const submit = (e) => {
    e.preventDefault();
    if(!validateForm()) return;
    data({ name, password });
    setname("");
    setpassword("");
    senddata();
   }
   const navigate = useNavigate();
  const senddata = async () => { 
    const response = await
      fetch("http://localhost:3000/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",},
        body: JSON.stringify({ name, password }),
      })
    const data = await response.json();
    console.log(data);
    if (data.success) {
      navigate('/access');
    }
  }
 
  return (
      <>
      <div className='flex justify-center items-center'>
        
              <div className='bg-white lg:h-96 lg:w-96  lg:mt-20 text-center rounded-2xl'>
                   {error && <p className='text-red-500'>{error}</p>}
                <h1 className='lg:mt-4 lg:text-4xl'>LOG IN </h1>
                  <div className='lg:mt-9'>
                      <h2 className=''>USERNAME</h2>
                        <input type="text"
                                placeholder='xyz@gmail.com'
                                value={name}
                                onChange={(e) => setname(e.target.value)}
            />
            
          </div>
         
                  <div className='lg:mt-9'>
                      <h2>PASSWORD</h2>
                            <input type="password"
                                   placeholder='password'
                                   value ={password}
                                   onChange={(e) => setpassword(e.target.value)}
                                    />
            
                </div>
                <div className='lg:mt-9'><button  onClick={submit} className=' lg:h-9 lg:w-16  bg-red-700 text-white hover:bg-red-300 hover:text-black'>log in</button></div>
              <footer className='lg:mt-9'><p>If you don't have an account?<button className='text-blue-500 hover:text-blue-950' onClick={()=>navigate("/Signup")} >SIGN UP</button></p></footer>
              </div>
        </div>
      </>
  )
}

export default login
