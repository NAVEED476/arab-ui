import React from 'react'
// import "./styles.css"
import Sidebar from '../components/Sidebar'
import Dashboard from "../Assets/Dashboard.png";
import Briefcase from "../Assets/Briefcase.png"

const LandingPage = () => {
  return (
    <div className='main-cont'>
        <div className='left-cont'>
            <div>
              <img src={Briefcase} alt="" />
            </div>
            <div>
              <Sidebar/>
            </div>
            <div>
              
            </div>
        </div>
       
    </div>
  )
}

export default LandingPage