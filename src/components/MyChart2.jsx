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

const MyChart2 = () => {
  // Define your chart data
  const data = {
    labels: ['.','.','2016','.','.','2017','.','.','2018','.','.','2019','.','.','2020','.','2021'],
    datasets: [
      {
        label: 'Onion',
        data: [

                28.9285714285714,
                49.0,
                31.6666666666667,
                16.0,
                20.0,
                15.0,
                13.0,
                15.0,
                43.75,
                31.75,
                20.0,
                20.0,
                16.6666666666667,
                18.3333333333333,
                67.5,
                35.0,
                23.75,
                43.3333333333333,
                45.0

            
      ],
        borderColor: 'rgba(255, 99, 71, 1)',
        backgroundColor: 'rgba(255, 99, 71, 0.4)',
        tension: 0.4, // Curved lines
      },
      {
        label: 'Potato',
        data: [
            17.1428571428571,
            23.0,
            16.6666666666667,
            10.0,
            10.0,
            20.0,
            15.0,
            6.0,
            13.75,
            9.75,
            15.0,
            10.0,
            10.0,
            18.3333333333333,
            21.25,
            20.0,
            27.5,
            35.0,
            15.0
        ]
        
        
      ,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        tension: 0.4,
      },
      {
        label: 'Tomato',
        data: [
            50.6666666666667,
            36.6666666666667,
            25.0,
            30.0,
            40.0,
            30.0,
            15.0,
            36.25,
            20.0,
            10.0,
            30.0,
            30.0,
            35.0,
            48.75,
            30.0,
            42.5,
            50.0,
            30.0
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
        text: 'Punjab',
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

export default MyChart2;
