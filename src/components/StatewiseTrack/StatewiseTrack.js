import React from 'react';
import './StatewiseTrack.css';
import Chart from 'react-apexcharts';
const StatewiseTrack = () => {
  return (
    <React.Fragment>
    <div className='Container-1'>
        {/* <p className='ContainerName'>Total Loocafes</p> */}
        {/* <p>By User</p> */}
        <Chart
        type='donut'
        width='100%'
        height={450}
        series={[100,30,10]}

        options={{
            labels:['Active' , 'Maintainance' , 'Removed'],
            colors: ["#51A358" , "#FF0000" , "#0060D3"],
            title:{
                text:'Total Loocafes',
                align: 'left',
                margin: 10,
                style: {
                    fontSize:  '24px',
                    color:  '#303030',
                    fontWeight:'400'
                  },
            },
            subtitle:{
                text:'State Wise',
                align:'left',
                margin:10,
                style:{
                  fontSize:'16px'
                }
            },
            plotOptions:{
                pie:{
                  expandOnClick:false,
                    donut:{
                      customScale: 0.8,
                      size:'70%',
                       labels:{
                          show:true,
                          total:{
                            //showAlways:true,
                            show:true,
                            fontSize:'1rem',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            color:'black'
                          }   
                       },
                       offsetY: 20,
                    }
                }
            },
            legend: {
              position: 'bottom',
              itemMargin:{
                horizontal:20
              },
              onItemHover:{
                highlightDataSeries:false
              },
              onItemClick:{
                toggleDataSeries:false
              },
              // offsetY: 100,
              // horizontalAlign:'center'
              // offsetX:80,
              // offsetY:60
            },
             dataLabels:{
                enabled:true,
            
             },
             
        }}
        />
    </div>
</React.Fragment>
  )
}

export default StatewiseTrack