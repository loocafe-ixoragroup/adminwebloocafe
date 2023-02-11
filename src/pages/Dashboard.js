import React from "react";
import Bargraph from "../components/Bar-graph/Bargraph";
import Statewise from "../components/StatewiseDonutChart/Statewise";
import Donutchart from "../components/Donutchart/Donutchart";
import StatewiseTrack from "../components/StatewiseTrack/StatewiseTrack";
const Dashboard = () => {
  var data = [
    {
      id: 1,
      title: "Total Issues Reported",
      text: "By User",
    },
    {
      id: 2,
      title: "Total Issues Reported",
      text: "By Cleaner",
    },
    {
      id: 3,
      title: "Total Loocafes cleaned",
      text: "",
    },
  ];
  return (
    <div>
      <Bargraph />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Statewise />
        <StatewiseTrack />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {data.map((e) => {
          return <Donutchart text={e.text} title={e.title} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
