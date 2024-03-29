import React from "react";
import Chart from "react-apexcharts";
import '../../components/Bar-graph/Bargraph.css'
const Bargraph = () => {
  return (
    <React.Fragment>
      <div className="Bar-Container">
        <div className="Inner-Container">
          {/* <h3 className="text-center mt-3 mb-3">Issues Reported</h3> */}

          <Chart
            type="bar" 
            series={[
              {
                name: "By User",
                data: [44, 55, 57, 56, 61, 58, 63],
                color:'#252525'
              },
              {
                name: "By Cleaner",
                data: [76, 85, 101, 98, 87, 105, 91],
                color:'#606060'
              },
            ]}
            options={{
              xaxis: {
                tickPlacement: "on",
                categories: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"],
                axisBorder: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
              },

              legend: {
                show: true,
                position: "bottom",
              },
              dataLabels: {
                enabled: false,
              },
              fill: {
                opacity: 1,
              },
              chart: {
                toolbar: {
                  show: false,
                },
              },
              title: {
                text: "Issues Reported",
                style: {
                  fontSize: 24,
                },
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: "45%",
                  endingShape: "rounded",
                  borderRadius: 3,
                  barHeight: 70,
                },
              },
              stroke: {
                show: true,
                width: 3,
                colors: ["transparent"],
              },
              grid: {
                strokeDashArray: 5,
                style: {
                  color: "#5C5C5C80",
                },
              },
            }}
          ></Chart>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Bargraph;
