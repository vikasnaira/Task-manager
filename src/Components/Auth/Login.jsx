import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { setLocalStorage } from '../utils/LocalStorage';
import { getLocalStorage } from '../utils/LocalStorage';
const Login = () => {
    const navigate = useNavigate();
    setLocalStorage();
    const data = getLocalStorage();

    const [name, setname] = useState(null)
    const [password, setPassword ] = useState(null)

  const  handlelogin =  ()=>{
    if(!name || !password){
      alert("Please fill in all fields.");
      return;
    }
    const user = data.users.find((user) => user.name === name && user.password === password);
    if (user) {
      if (user.role === 'admin') {
        navigate('/boss');
      } else if (user.role === 'client') {
        navigate('/client');
      }
    } else {
      alert("Invalid credentials, please try again.");
    }
  }
  return (
    <div className='h-screen w-full flex items-center justify-center p-10  bg-[url("LoginBg.jpg")] bg-center bg-no-repeat bg-cover'>
      <div className="login text-bklack   gap-7 w-[20rem] p-4  border-1 border-black md:bg-gray-500/20 flex flex-col backdrop-blur-sm items-center py-10 rounded-lg shadow-md shadow-black hover:shadow-lg  transition-linear  duration-250">
      <h1 className='text-3xl font-bold my-5 xl:text-[2vw]'>LOGIN HERE</h1>
      <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='enter your id'  className='border-1 placeholder:text-black w-[70%] text-sm border-black lg:placeholder:text-sm  rounded-lg p-2'  />
      <input type="text" placeholder="password" value={password} onChange={(e) =>setPassword(e.target.value)} className='border-1 text-sm w-[70%]  border-black placeholder:text-black lg:placeholder:text-sm rounded-lg p-2' />
      <div className="button flex gap-3 w-[70%] justify-center">
      <button className='bg-violet-800 text-white w-fit py-1 px-2  rounded-full text-sm lg:text-[1.3vw]' onClick={handlelogin} >Login in</button>
      </div>
       <div className="checkbox flex  text-sm lg:text-[1vw] items-center">
       <label htmlFor="remind">Remind me</label>
      <input type="checkbox" name="remind" id="remind" />
     </div>
      <a href="#" className="text-sm  font-sans underline text-white'>forget password">forget password</a>
      </div>
    </div>
  )
}

export default Login
    