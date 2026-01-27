import {useEffect, useState} from 'react'
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import { GiMuscleUp } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
import { GiBiceps } from "react-icons/gi";
import { GiMuscleFat } from "react-icons/gi";
import './GetStarted.css'
import Main from '../Main/MainPage';


function GetStarted(){

  
  const navigate=useNavigate();
  function main_navigate(){
    navigate('/main')
  }

  const [dark, setDark]=useState(() =>{
    const stored=localStorage.getItem('theme')
    if (stored){
      return stored
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' :'light';
  });

  useEffect(() =>{
    document.documentElement.setAttribute('data-theme', dark);
    localStorage.setItem('theme', dark)
  }, [dark]);

  function handleBackground(){
    setDark(prev => (prev === 'light' ? 'dark':'light'));
    return [dark, handleBackground]
 

  }

  
  return(
 
    <>
  <nav className="main-nav">
  <button onClick={handleBackground} id='togglebutton' className='button'>{dark==='dark' ? '☀️': '🌙'}</button>
  </nav>
  <div className="container">
   <div className="experience-holder" onClick={main_navigate}>
   <FaPerson size={60} color='#EACBA8'/>
    <h3>Beginner</h3>
    </div>
   <div className="experience-holder" onClick={main_navigate}>
    <GiMuscleFat size={60} color='#EACBA8'/>
    <h3>Novice</h3></div>
   <div className="experience-holder" onClick={main_navigate}>
    <GiMuscleUp size={60} color='#EACBA8'/>
    <h3>Intermediate</h3></div>
   <div className="experience-holder" onClick={main_navigate}>
    <GiBiceps size={60} color='#EACBA8'/>
    <h3>Experienced</h3></div>
   </div>

  </>)

  }
export default GetStarted