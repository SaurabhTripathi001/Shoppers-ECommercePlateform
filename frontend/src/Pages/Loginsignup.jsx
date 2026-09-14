import React from 'react'
import './CSS/Loginsignup.css'

const Loginsignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>SignUp</h1>
          <div className="loginsignup-fields">
            <input type="text" name="" id="" placeholder='Your Name'/>
            <input type="email" placeholder='Your Email' />
            <input type="password" placeholder='Your PassWord' />
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">Already Have An Account?<span>LogIn</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox " name='' id='' />
            <p>By Continuing, i agree to the therms of use & privacy policy</p>
          </div>
        </div>
    </div>
  )
}

export default Loginsignup