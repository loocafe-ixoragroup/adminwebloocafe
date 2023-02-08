import React from 'react'
import '../../components/StatewiseDonutChart/Statewise.css';
import Chart from 'react-apexcharts';
const Statewise = () => {
  return (
    <React.Fragment>
    <div className='Container-1'>
        {/* <p className='ContainerName'>Total Loocafes</p> */}
        {/* <p>By User</p> */}
        <Chart
        type='donut'
        width='100%'
        height={500}
        series={[10,20,20,10,20,15,11,9,8,11]}

        options={{
            labels:['Madhya Pradesh' , 'Uttar Pradesh' , 'Karnataka', 'Gujarat' , 'Jammu & Kashmir' , 'Telangana' , 'Rajastan' , 'Himachal Pradesh' , 'Maharashatra' , 'Tamil Nadu'],
            colors: ["#006DEF", "#79C980", "#FF0000" , "#51A358"],
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

export default Statewise