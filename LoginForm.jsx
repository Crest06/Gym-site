import { FaUserLock } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import './LoginForm.css';
import { useState } from 'react';
import App from '../App';

function LoginForm(){

  const [visible, setVisible] =useState(false)

  const [closed, setClosed]=useState(false)

  function handleExit(e){
    e.preventDefault()
    setClosed(!closed)
  }
  function handleVisibility(e){
    e.preventDefault()
    setVisible(!visible)
  }
    return(
      <>
      {closed ? (<App/>) :(
      <>
   <div className='screen'>
      <button className="close" onClick={handleExit}>
        <IoClose size={25}/>
      </button>
      
      <form className="login-form">
        <h3 className='login-text'>Log In</h3>
        <div className="input-holder">
        <FaUser className='fa-input'/>
        <input placeholder='Email or Username' type='text' autoFocus className='pass-input'></input>
        </div>
        <div className="input-holder">
        <FaUserLock className='fa-input'/>
        <button className='eye-button' onClick={handleVisibility}>{visible ? <FaEyeSlash className='eye-input'/>: <FaEye className='eye-input'/>}</button>
        <input placeholder= 'Password' type={visible ? 'text':'password'} className='pass-input'></input>
        
        </div>
        <button className='login-button'>Log In</button>
        <div className="login-holder">
        <div className="line"></div>
        <h4>OR</h4>
        <div className="line"></div>
        </div>
        <div className='login-holder'>
        <button className='auxilliary-button'>Forgot ?</button>
        <button className='auxilliary-button'>Sign Up</button>
        </div>
      </form>
    </div>
      </>
      )}
      </>
    )
  }

  export default LoginForm