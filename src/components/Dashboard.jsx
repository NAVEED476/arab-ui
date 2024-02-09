import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

import Table from "./Table";
import ProfileCard from "./ProfileCard";
import Rectangle10 from "../Assets/Rectangle10.png";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [lineData, setLineData] = useState([]);
  const [loadingLineChart, setLoadingLineChart] = useState(true);
  const [loadingPieChart, setLoadingPieChart] = useState(true);

  const size = {
    width: 400,
    height: 200,
  };

  useEffect(() => {
    fetch("https://arab-ms.onrender.com/api/graph")
      .then((d) => d.json())
      .then((obj) => {
        setLineData(obj);
        setLoadingLineChart(false);
      })
      .catch((error) => {
        console.error("Error fetching line chart data:", error);
        setLoadingLineChart(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://arab-ms.onrender.com/api/pie-chart")
      .then((d) => d.json())
      .then((obj) => {
        setData(obj);
        setLoadingPieChart(false);
      })
      .catch((error) => {
        console.error("Error fetching pie chart data:", error);
        setLoadingPieChart(false);
      });
  }, []);

  const formattedData = data.map((item) => ({
    label: item.label,
    value: item.value,
  }));

  const formattedLineData = lineData.map((item) => ({
    x: item.x,
    y: item.y,
  }));

  const pieColors = ['#67c587', '#88d1a1', '#a9deba', '#c9ead4', '#eaf6ed'];

  return (
    <div>
      <div className="right-cont">
        <div className="navbar">
          <h3>Good Morning!</h3>
          <div className="profile">
            <div>
              <p style={{ fontSize: "12px", fontWeight: 700, margin: 0 }}>
                Jhon Doe
              </p>
              <p style={{ fontSize: "10px", fontWeight: 500, margin: 0 }}>
                jhon@doe.com
              </p>
            </div>
            <img src={Rectangle10} alt="" />
          </div>
        </div>
        <div className="top-cont">
          <div className="graph-cont">
            {loadingLineChart ? (
              <div className="spinner">Loading Line Chart...</div>
            ) : (
              <LineChart
                width={650}
                height={260}
                data={lineData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="y"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            )}
          </div>
          <div className="chart-cont" style={{ display: "flex" }}>
            {loadingPieChart ? (
              <div className="spinner">Loading Pie Chart...</div>
            ) : (
              <PieChart
                series={[
                  {
                    arcLabelMinAngle: 45,
                    data: formattedData,
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: "red",
                    fontWeight: "400",
                  },
                }}
                colors={pieColors}
                {...size}
              />
            )}
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
