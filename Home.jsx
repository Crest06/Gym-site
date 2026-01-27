import {useEffect, useState} from 'react'
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import './Home.css';


function Home(){

  const[login, setLogin]=useState(false)

  
  const navigate=useNavigate();

  const handleGetStarted=()=>{
    navigate('/getstarted')
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

  function toggleLogin(){
    setLogin(!login)
  }

  
  return(<>
  {login ? (<LoginForm />) : (
    <>
  <nav className="main-nav">
  <button onClick={handleBackground} id='togglebutton' className='button'>{dark==='dark' ? '☀️': '🌙'}</button>
  </nav>
  
  <div className="holder">
    <h3>The free and fun way to train!</h3>
  <button className="get-started" onClick={handleGetStarted}>Get Started</button>
  <button className="get-started" style={{color:'blue', backgroundColor:'white'}} onClick={toggleLogin}>Already have an Account?</button>
  </div>
  </>
  )}

  </>)
}

export default Home