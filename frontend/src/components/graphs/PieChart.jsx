import React from 'react';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Register the necessary components for ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ labels, text, data, backgroundColor, borderColor, offset }) => {
  // Generate random colors for background and border if not provided
  const generateRandomColors = (count) => {
    return Array.from({ length: count }, () =>
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    );
  };

  const backgroundColors = backgroundColor.length ? backgroundColor : generateRandomColors(labels.length);
  const borderColors = borderColor.length ? borderColor : generateRandomColors(labels.length);

  // Options for the Pie Chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
          
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0,0,0,0.7)',
        bodyColor: '#fff',
        titleColor: '#fff',
      },
    },
  };

  // Data for the Pie Chart
  const pieData = {
    labels,
    datasets: [
      {
        label:text,
        data,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
        offset,
      },
    ],
  };

  return <Pie data={pieData} options={options} />;
};

// PropTypes validation for the component
PieChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  backgroundColor: PropTypes.arrayOf(PropTypes.string),
  borderColor: PropTypes.arrayOf(PropTypes.string),
  offset: PropTypes.arrayOf(PropTypes.number),
};

// Default props
PieChart.defaultProps = {
  data: [200, 300],
  labels: ['Female', 'Male'],
  backgroundColor: [],
  borderColor: [],
  offset: [2, 2],
};

export default PieChart;
