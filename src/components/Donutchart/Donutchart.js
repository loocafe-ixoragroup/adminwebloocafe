import React from "react";
import Chart from "react-apexcharts";
import '../Donutchart/Donutchart.css';
const Donutchart = () => {
  return (
    <React.Fragment>
      <div className="Container-2">
        {/* <p className='Container-name'>Total Issues Reported</p> */}
        {/* <p>By User</p> */}
        <Chart
          type="donut"
          width="100%"
          height={400}
          series={[23, 45]}
          options={{
            labels: ["Pending", "Solved"],
            colors: ["#606060", "#252525"],
            title: {
              text: "Total Issues Reported",
              align: "left",
              margin: 10,
              style: {
                fontSize: 18,
                color: "#303030",
                fontWeight: "400",
              },
            },
            subtitle: {
              text: "By User",
              margin: 10,
              style: {
                fontSize: 14,
                color: "#303030",
                fontWeight: "300",
              },
            },
            plotOptions: {
              pie: {
                expandOnClick: false,
                donut: {
                  customScale: 0.8,
                  size: "70%",
                  labels: {
                    show: true,
                    total: {
                      //showAlways:true,
                      show: true,
                      color: "black",
                    },
                  },
                  offsetY: 20,
                },
              },
            },
            legend: {
              position: "bottom",
              itemMargin: {
                horizontal: 20,
                vertical:10
              },
              onItemHover: {
                highlightDataSeries: false,
              },
              onItemClick: {
                toggleDataSeries: false,
              },
            },
            dataLabels: {
              enabled: true,
            },
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Donutchart;
