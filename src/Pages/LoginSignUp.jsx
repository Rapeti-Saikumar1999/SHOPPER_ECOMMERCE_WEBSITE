import React, { useState } from 'react'
import "./CSS/LoginSignUp.css"
import { LoginData } from '../Context/LoginAuth'
import { useNavigate } from 'react-router-dom';
function LoginSignUp() {
  const {Login} =LoginData();
  const [userName,setUserName] = useState("");
  const [Email,setEmail] = useState("");
  const nav = useNavigate();

  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Login</h1>
        <div className="login-signup-filed">
          <input type="text" placeholder="Your Name" name="" id="" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
          <input type="email" placeholder="Email Address" name="" id="" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
          {/* <input type="password" placeholder="Password"name="" id="" /> */}
        </div>
        <button onClick={()=>{
          if(userName&&Email)
          {
            Login(userName,Email);
          nav("/",{replace:true});
          }
          else
          {
            alert("Please Enter Valid Input!")
          }
        }}
        >Continue</button>
        {/* <p className='loginsignup-login'>Already have an account?<span>Login here</span></p> */}
        {/* <div className="login-signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, i agree to terms of use & privacy policy  </p>
        </div> */}
      </div>
    </div>
  )
}

export default LoginSignUp
