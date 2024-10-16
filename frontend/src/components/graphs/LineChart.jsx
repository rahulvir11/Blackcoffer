import React from 'react'
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  PointElement,
  Tooltip,
  Legend,
  ArcElement, 
  LineElement,
  Filler
} from "chart.js";
import { Line} from "react-chartjs-2";
 const LineChart = ({d1,d2,labels,b1,b2,bg1,bg2,legends ,text1,text2}) => {
  ChartJS.register(
    CategoryScale,
    PointElement,
    LineElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    Filler
  );
   const options = {
     responsive: true,
     fill:true,
     plugins: {
       legend: {
        display:legends,
        position: "top",
       },
       title: {
        display: legends,
        text: 'Chart.js Line Chart',
      },
     },

     scales:{
      y:{
        beginAtZero:false,
        grid:{
          display:true
        }
      },
      x:{
        beginAtZero:true,
        grid:{
          display:true
        }
      },
      borderWidth: 1,
    }
   };
 
const linedata = {
  labels,
    datasets: [
      {
        label:text1,
        data:d1 ,
        borderColor:b1 ,
        backgrounColor:bg1
      },
      {
        label:text2,
        data:d2 ,
        borderColor:b2 ,
        backgrounColor:bg2
      },
     ],
   };
   return <Line  data={linedata} options={options} />;
 };
 LineChart.propTypes = {
   d1:PropTypes.array.isRequired,
   text1:PropTypes.string.isRequired,
   text2:PropTypes.string,
   bg1:PropTypes.string,
   bg2:PropTypes.string,
   labels:PropTypes.array,
   b1:PropTypes.string,
   b2:PropTypes.string,
   legends:PropTypes.bool
 };
//  LineChart.defaultProps = {
//    data:[57,77,32],
//    label:"Relevance, Over ,Time",
//    labels:[  "January",
//    "February",
//    "March",
//    "April",
//    "May",
//    "June",
//    "July",
//    "August",
//    "September",
//    "October",
//    "November",
//    "December",],
//    legends:false
//  };
 export default LineChart