import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MyChart = () => {
  // Define your chart data
  const data = {
    labels: ['.','.','2016','.','.','2017','.','.','2018','.','.','2019','.','.','2020','.','2021'],
    datasets: [
      {
        label: 'Onion',
        data: [
          29.8709677419355,
          40.52,
          19.0454545454545,
          18.5882352941177,
          19.3333333333333,
          16.0,
          18.5882352941177,
          41.5555555555556,
          26.7294117647059,
          17.8444444444444,
          18.0235294117647,
          13.3647058823529,
          20.9555555555556,
          66.5764705882353,
          35.9058823529412,
          19.3222222222222,
          52.9882352941176,
          38.2
      ],
        borderColor: 'rgba(255, 99, 71, 1)',
        backgroundColor: 'rgba(255, 99, 71, 0.4)',
        tension: 0.4, // Curved lines
      },
      {
        label: 'Potato',
        data: [
          18.44,
          17.0,
          18.4,
          21.1363636363636,
          30.3529411764706,
          26.1111111111111,
          13.4117647058824,
          16.0,
          16.6666666666667,
          17.1176470588235,
          23.2777777777778,
          22.7058823529412,
          17.3411764705882,
          20.3888888888889,
          24.7294117647059,
          28.2117647058824,
          32.0444444444444,
          42.4941176470588,
          28.96
      ]
      ,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        tension: 0.4,
      },
      {
        label: 'Tomato',
        data: [
            19.72,
            22.8709677419355,
            24.24,
            14.7727272727273,
            30.7058823529412,
            12.6666666666667,
            12.8235294117647,
            28.9411764705882,
            32.0,
            15.0117647058824,
            22.4222222222222,
            17.0941176470588,
            21.9294117647059,
            41.9777777777778,
            34.4470588235294,
            21.4588235294118,
            38.1888888888889,
            39.9764705882353,
            25.0
        
      ],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
        tension: 0.4,
      }

    ],
  };

  // Define chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Maharashtra',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      }
    },
  };

  return <Line data={data} options={options} />;
};

export default MyChart;
