import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";

import Table from "./Table";
import ProfileCard from "./ProfileCard";
import Rectangle10 from "../Assets/Rectangle10.png"

const Dashboard = () => {
  const [page, setPage] = React.useState(1);
  const [data, setData] = useState([]);
  const [lineData, setLineData] = useState([]);
  const handleChange = (event, value) => {
    setPage(value);
  };


  const size = {
    width: 400,
    height: 200,
  };

  useEffect(() => {
    fetch("https://arab-ms.onrender.com/api/pie-chart")
      .then((d) => d.json())
      .then((obj => setData(obj)));
  }, []);

  const formattedData = data.map((item) => ({
    label: item.label,
    value: item.value,
  }));



  return (
    <div>
      <div className="right-cont">
        <div className="navbar">
            <h3>Good Morning!</h3>
            <div className="profile">
                <div>
                    <p style={{fontSize:"12px", fontWeight:700, margin:0}}>Jhon Doe</p>
                    <p style={{fontSize:"10px", fontWeight:500,margin:0}}>jhon@doe.com</p>
                </div>
                <img src={Rectangle10} alt="" />

            </div>
        </div>
        <div className="top-cont">
          <div className="graph-cont">
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={650}
              height={260}
            />
          </div>
          <div className="chart-cont" style={{ display: "flex" }}>
            <PieChart
              series={[
                {
                  arcLabel: (item) => `${item.label} (${item.value})`,
                  arcLabelMinAngle: 45,
                  data:formattedData,
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontWeight: "bold",
                },
              }}
              {...size}
            />
          </div>
        </div>
        <div className="bottom-cont">
          <div className="table-cont">
            <Table />
          </div>
          <div className="profile-cont">
            <ProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
