import { FaStar } from "react-icons/fa6";
import { FaCrown } from "react-icons/fa6";
import { GiBiceps } from "react-icons/gi";
import { MdLeaderboard } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GiOpenTreasureChest } from "react-icons/gi";
import './MainPage.css';
import { useState } from "react";

function Main(){
   const [profile, setProfile] = useState(false)
   const [hearts, setHearts] = useState(false)
   const [streaks, setStreaks] = useState(false)
    function handleProfile(){
       setProfile(!profile)

    }

    function handleHearts(){
       setHearts(!hearts)
    }

    function handleStreaks(){
        setStreaks(!streaks)
    }
    return(
        <>
        <div className="main-container">
            <div className="section-title">
               <span className="span-section"><IoMdArrowRoundBack/>Section 1</span>
               <p className="p-section">Calisthenics</p>
            </div>
            <div className="wrap">
            <div className="start-div">Start</div>
            <button className="active" ><FaStar color="black" size={25} aria-label="Level 1 of 4"/></button>
            </div>
            <button><FaStar color="black" size={25}/></button>
            <button><FaStar color="black" size={25}/></button>
            <button><FaStar color="black" size={25}/></button>
            <button><FaCrown color="black" size={25}/></button>
            <div className="section-title2" >
                <span className="span-section"><IoMdArrowRoundBack/>Section 2</span>
               <p className="p-section">Chest and Triceps</p>
            </div>
            <button><FaStar color="black" size={25}/></button>
            <button><FaStar color="black" size={25}/></button>
            <button><FaStar color="black" size={25}/></button>
            <button><FaStar color="black" size={25}/></button>
            <button><FaCrown color="black" size={25}/></button>
            <div className="section-title3">
               <span className="span-section"><IoMdArrowRoundBack/>Section 3</span>
               <p className="p-section">Back and Biceps</p>
            </div>
            <button><FaStar color="black" size={25}/></button>
            <button><FaStar color="black" size={25}/></button>
            <button><FaStar color="black" size={25}/></button>
            <button><FaStar color="black" size={25}/></button>
            <button><FaCrown color="black" size={25}/></button>
        </div>

        <nav className="main-navbar">
            <span className="active-span"><GiBiceps color="#EACBA8"/>Train</span>
            <span><FaUser color="#4444b8ff"/>Profile</span>
            <span><MdLeaderboard color="yellow"/>Leaderboard</span>
            <span><MdMoreHoriz color="red"/>More</span>
            <span><RiLogoutBoxLine/>Logout</span>
        </nav>

        <nav className="right-bar">
            <div className="profile-holder">
             <span onMouseEnter={() => handleProfile(true)} onMouseLeave={() => handleProfile(false)}><GiBiceps/></span>
             <span onMouseEnter={() => handleHearts(true)} onMouseLeave={() => handleHearts(false)}><FaHeart color="red"/> 3</span>
             <span onMouseEnter={() => handleStreaks(true)} onMouseLeave={() => handleStreaks(false)}><FaFire color="orange"/>0</span>
            </div>

            {profile && <div className="profile-div">hello</div>}
            {hearts && <div className="heart-div">
                <h3>Hearts</h3>
                <div className="hearts-container">
                <FaHeart color="red" size={30}/>
                <FaHeart color="red" size={30}/>
                <FaHeart color="red" size={30}/>
                </div>
                <span>You have unlimited hearts</span>
                <span>Keep Training</span>
                <button className="want-hearts"></button>
                </div>}
            {streaks && <div className="streak-div">hi</div>}
            <div className="section-holder">
            <section className="section">
                <h3>Unlock Leaderboards!</h3>
                <div className="progress-wrapper"><span><FaLock/>Complete 10 exercises to unlock this</span></div>
            </section>
            <section className="section">
                <h3>Daily Quests</h3>
                <div className="progress-wrapper"><div className="progress-bar"><span>0/10</span></div><GiOpenTreasureChest color="yellow" size={25}/></div>
            </section>
            <section className="section"><button></button></section>
               
            </div>
        </nav>
        </>
    )
}

export default Main