import React from "react";
// import "../pages/styles.css";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";

const Dashboard = () => {
  return (
    <div>
      <div className="right-cont">
        <div className="nav-cont"></div>
        <div className="top-cot">
          <div className="graph-cont"></div>
          <div className="chart-cont" style={{display:"flex"}}>
            <h1>Hello</h1>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={500}
              height={300}
            />
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "series A" },
                    { id: 1, value: 15, label: "series B" },
                    { id: 2, value: 20, label: "series C" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </div>
        </div>
        <div className="bottom-cont">
          <div className="table-cont"></div>
          <div className="profile-cont"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
