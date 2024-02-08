import React from 'react'
import "./styles.css"
import Sidebar from '../components/Sidebar'
import Dashboard from "../Assets/Dashboard.png";

const LandingPage = () => {
  return (
    <div className='main-cont'>
        <div className='left-cont'>
            <div>
              <Sidebar/>
            </div>
        </div>
       
    </div>
  )
}

export default LandingPage