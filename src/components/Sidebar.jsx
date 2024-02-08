import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import React, { useState } from "react";
import "./sidebar.css";
import Dashboard from "./Dashboard";
import Briefcase from "../Assets/Briefcase.png";
import Settings from "./Settings";
import Plugins from "./Plugins";
import Help from "./Help";
import CircledMenu from "../Assets/CircledMenu.png";
import Helppng from "../Assets/Helppng.png";
import Support1 from "../Assets/Support1.png";
import Puzzle from "../Assets/Puzzle.png";
import Shutdown from "../Assets/Shutdown.png"
export default function Sidebar() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const tabContents = [<Dashboard />, <Settings />, <Plugins />, <Help />];
  return (
    <>
      <div className="sidebar-cont">
        <img src={Briefcase} alt="" className="briefcase" />
        <div className="menuBox">
          <div className="menu">
            <ul className="sidebar-list">
              <li onClick={() => handleTabClick(0)}>
                <img className="sidebar-icons" src={CircledMenu} alt="cirlce" />{" "}
                Dashboard
              </li>
              <li onClick={() => handleTabClick(1)}>
                <img className="sidebar-icons" src={Support1} alt="support" />
                Support
              </li>
              <li onClick={() => handleTabClick(2)}>
                {" "}
                <img className="sidebar-icons" src={Puzzle} alt="puzzle" />
                Plugins
              </li>
              <li onClick={() => handleTabClick(3)}>
                {" "}
                <img className="sidebar-icons" src={Helppng} alt="help" />
                Help
              </li>
            </ul>
            <button className="signOut"><img className="shutdown-btn" src={Shutdown} alt="" />Signout</button>
          </div>

          <div className="content">{tabContents[activeTab]} </div>
        </div>
      </div>
    </>
  );
}

//   return (
//     <div className="app">
//       {/* Sidebar with tabs */}
//       <div className="sidebar">
//         <div className="tab" onClick={() => handleTabClick(0)}>Tab 1</div>
//         <div className="tab" onClick={() => handleTabClick(1)}>Tab 2</div>
//         <div className="tab" onClick={() => handleTabClick(2)}>Tab 3</div>
//         <div className="tab" onClick={() => handleTabClick(3)}>Tab 4</div>
//       </div>

//       {/* Main content area */}
//       <div className="content">
//         {/* Render content based on active tab */}
//         {tabContents[activeTab]}
//       </div>
//     </div>
//   );
// }

// export default App;
