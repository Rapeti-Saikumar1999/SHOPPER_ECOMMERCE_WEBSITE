import React from 'react'
import "./CSS/LoginSignUp.css"
function LoginSignUp() {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-filed">
          <input type="text" placeholder="Your Name" name="" id="" />
          <input type="email" placeholder="Email Address" name="" id="" />
          <input type="password" placeholder="Password"name="" id="" />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?<span>Login here</span></p>
        <div className="login-signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, i agree to terms of use & privacy policy  </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
