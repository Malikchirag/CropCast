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

const MyChart3 = () => {
  // Define your chart data
  const data = {
    labels: ['.','.','2016','.','.','2017','.','.','2018','.','.','2019','.','.','2020','.','2021'],
    datasets: [
      {
        label: 'Onion',
        data: [
            25.1666666666667,
            42.4444444444444,
            45.3421052631579,
            18.4259259259259,
            15.9518072289157,
            14.2708333333333,
            13.8921568627451,
            15.9509803921569,
            34.7037037037037,
            29.156862745098,
            21.1666666666667,
            19.6666666666667,
            16.3333333333333,
            21.0277777777778,
            66.5,
            50.1958762886598,
            26.1388888888889,
            44.156862745098,
            42.35
        ]
        ,
        borderColor: 'rgba(255, 99, 71, 1)',
        backgroundColor: 'rgba(255, 99, 71, 0.4)',
        tension: 0.4, // Curved lines
      },
      {
        label: 'Potato',
        data: [
            13.3333333333333,
            12.0740740740741,
            13.0526315789474,
            11.2037037037037,
            19.6144578313253,
            18.0416666666667,
            8.25490196078432,
            8.34313725490196,
            9.83333333333333,
            11.8333333333333,
            19.1851851851852,
            18.6470588235294,
            12.8137254901961,
            16.6111111111111,
            18.1666666666667,
            21.9072164948454,
            26.3796296296296,
            37.1274509803922,
            14.4333333333333
        ]
        
      ,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        tension: 0.4,
      },
      {
        label: 'Tomato',
        data:[
            24.7777777777778,
            33.5185185185185,
            36.1315789473684,
            21.4528301886792,
            34.3493975903615,
            25.9583333333333,
            14.1274509803922,
            44.8725490196078,
            46.2685185185185,
            20.5,
            31.8518518518519,
            25.4411764705882,
            21.5098039215686,
            43.1574074074074,
            45.3333333333333,
            26.8865979381443,
            44.3333333333333,
            58.3333333333333,
            23.3
        ]
        
        
        ,
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
        text: 'Uttar Pradesh',
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

export default MyChart3;
