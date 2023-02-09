import React from "react";
import Bargraph from "../components/Bar-graph/Bargraph";
import Statewise from "../components/StatewiseDonutChart/Statewise";
import Donutchart from "../components/Donutchart/Donutchart";
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
    <> 
    <Bargraph/>
    <Statewise/>
    {
      data.map((e) =>{
        return(
          <Donutchart/>
        );
      })
     }
    </>
  );
};

export default Dashboard;
