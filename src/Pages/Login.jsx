import React, { useState ,useContext} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink, useNavigate } from "react-router-dom";
import { userContext } from '../context/usercontext';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Oauth from "../components/Oauth";
function Login() {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [loading,setloading] = useState(false)
    const navigate = useNavigate()
    const formdata = {
      email,password
  }
  const {setUser} = useContext(userContext)
    const senddata = async (e) => {
      setloading(true)
      e.preventDefault()
      try{
          const data = await fetch('https://lms-backend-zjpz.onrender.com/login',{
              method:"POST",
              credentials:'include',
              headers:{
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(formdata)
              
          });
          const res = await data.json();
          console.log(res)
          if(res.message){
            toast.error("Invalid Credentials")
          }else{
            setUser(res)
            localStorage.setItem("userdetails",JSON.stringify(res))
            toast.success("Successfully Loggedin");
            navigate('/')
          }
          setloading(false)
          
      }catch(err){
          console.log(err)
          toast.error("Something went wrong!!!")
          setloading(false)
      }
  }
  return (
    <>
    <Navbar />
  <div className="w-full bg-base-100">
  <div className="flex flex-col-reverse md:flex-row w-11/12 mx-auto justify-center items-center mb-5">
    <div className="w-full md:w-1/2 px-5 flex flex-col gap-5">
        <h1 className="text-center md:text-left text-4xl font-bold mb-5">Log In</h1>
      <label className="font-semibold input input-bordered flex items-center gap-2">
        Email
        <input type="text" className="grow" placeholder="rs20000@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="font-semibold input input-bordered flex items-center gap-2">
        Password
        <input type="password" className="grow" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button disabled={loading} className="btn bg-red-300 text-black" onClick={(e)=>senddata(e)}>{loading?"Loading..":"Login"}</button>
      <p className="text-md font-medium self-end">Don't have an account ? <NavLink className={'underline'} to={'/signup'}>Sign up</NavLink> </p>
      <Oauth />
    </div>
    <div className="md:w-1/2">
        <img src="https://res.cloudinary.com/damkoygfn/image/upload/v1720249194/msmhdkj69lglore7hjex.png" alt="" />
    </div>
  </div>
  </div>
  <hr />
  <ToastContainer />
  <Footer />
</>
  )
}

export default Login
