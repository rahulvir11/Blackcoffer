import React from 'react'
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
const BarChart = (props) => {
 ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    indexAxis: props.horizontal ? "y":"x",
    plugins: {
      legend: {
        display:true,
        position: "top",
      },
    },
    scales:{
      y:{
        beginAtZero:true,
        grid:{
          display:true
        }
      },
      x:{
        beginAtZero:true,
        grid:{
          display:true
        }
      }
    },
    borderWidth: 1,

  };

  const data = {
    labels:props.labels,
    datasets: [
      {
        label: props.text1,
        data: props.d1,
        backgroundColor: props.bg1,
      },
      {
        label: props.text2,
        data: props.d2,
        backgroundColor: props.bg2,
      }
    ],
  };
  return <Bar  data={data} options={options} />;
};
BarChart.propTypes = {
  horizontal:PropTypes.bool,
  d1:PropTypes.array.isRequired,
  d2:PropTypes.array.isRequired,
  text1:PropTypes.string.isRequired,
  text2:PropTypes.string.isRequired,
  bg1:PropTypes.string.isRequired,
  bg2:PropTypes.string.isRequired,
  labels:PropTypes.array
};
BarChart.defaultProps = {
  horizontal:false,
  d1:[57,77,32],
  d2:[33,56,90],
  bg1:"#a3e2a2",
  bg2:"#a3e2a2",
  text1:"dataset 1",
  text2:"dataset 2",
  labels:[
    'Intensity',
    'Likelihood'
    ]
};

export default BarChart