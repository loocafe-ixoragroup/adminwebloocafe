import React from "react";
import Bargraph from "../components/Bar-graph/Bargraph";
import Statewise from "../components/StatewiseDonutChart/Statewise";
import Donutchart from "../components/Donutchart/Donutchart";
import StatewiseTrack from "../components/StatewiseTrack/StatewiseTrack";
const Dashboard = () => {
  var data = [
    {
     id:1
    },
    {
     id:2
    },
    {
     id:3
    }

];
  return (
    <div>
    <Bargraph/>
    <div style={{display:"flex" , flexDirection:"row"}}>
    <Statewise/>
    <StatewiseTrack/>
    </div>
    {
      data.map((e) =>{
        return(
          <Donutchart/>
        );
      })
     }
    </div>
  );
};

export default Dashboard;
