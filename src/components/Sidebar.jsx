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
import Shutdown from "../Assets/Shutdown.png";

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
              <li
                className={activeTab === 0 ? "active" : ""}
                onClick={() => handleTabClick(0)}
              >
                <img
                  className="sidebar-icons"
                  src={CircledMenu}
                  alt="cirlce"
                />{" "}
                Dashboard
              </li>
              <li
                className={activeTab === 1 ? "active" : ""}
                onClick={() => handleTabClick(1)}
              >
                <img
                  className="sidebar-icons"
                  src={Support1}
                  alt="support"
                />
                Support
              </li>
              <li
                className={activeTab === 2 ? "active" : ""}
                onClick={() => handleTabClick(2)}
              >
                {" "}
                <img className="sidebar-icons" src={Puzzle} alt="puzzle" />
                Plugins
              </li>
              <li
                className={activeTab === 3 ? "active" : ""}
                onClick={() => handleTabClick(3)}
              >
                {" "}
                <img className="sidebar-icons" src={Helppng} alt="help" />
                Help
              </li>
            </ul>
            <button className="signOut">
              <img className="shutdown-btn" src={Shutdown} alt="" />
              Signout
            </button>
          </div>

          <div className="content">{tabContents[activeTab]} </div>
        </div>
      </div>
    </>
  );
}
