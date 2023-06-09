import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const naviget = useNavigate()
  const handleLogin =(e)=>{
    if (email==="ami@gmail.com" & password==='123456'){
      naviget("/chat")
    }
  }
  return (
    <div className="min-h-screen bg-[#021807] ">

    <h1 className=' text-center text-4xl pt-5 pb-10 text-white'>Welcome to Chat Application</h1>
    <h1 className=' text-center text-2xl py-5  text-white'>Log in</h1>
    <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input onChange={e=>setEmail(e.target.value)} type="text" placeholder="Email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input onChange={e=>setPassword(e.target.value)} type="Password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover"></a>
            <a href="#" className="label-text-alt link link-hover text-primary">Register now</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleLogin} className="btn btn-primary">Login</button>
        </div>
        <div className="form-control mt-6">
          {email!=="ami@gmail.com" && email!==""&&<p className=' text-error'>email not match !</p>}
          {password !=='123456' &&password!=="" &&<p className=' text-error'>Password not match !</p>}
        </div>
      </div>
    </div>
  
</div>
  )
}

export default Login