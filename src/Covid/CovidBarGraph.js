import { Line } from 'react-chartjs-2';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function CovidBarGraph() {
  const [data, setData] = useState(null);

  useEffect(() => {
    try{
      axios.get('https://disease.sh/v3/covid-19/historical/india?lastdays=90')
      .then(response => {
        const { cases, recovered, deaths } = response.data.timeline;
        const labels = Object.keys(cases);
        const dailyNewCases = labels.map((date, i) => {
          if (i === 0) return 0;
          return cases[date] - cases[labels[i-1]];
        });
        const dailyNewRecovered = labels.map((date, i) => {
          if (i === 0) return 0;
          return recovered[date] - recovered[labels[i-1]];
        });
        const dailyNewDeaths = labels.map((date, i) => {
          if (i === 0) return 0;
          return deaths[date] - deaths[labels[i-1]];
        });
        setData({ labels, dailyNewCases, dailyNewRecovered, dailyNewDeaths });
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });

    }catch (error) {
      console.log(error);
    }
  }, []);
   

  if (!data) {
    return <div>Loading...</div>;
  }
 
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Daily New Cases',
        data: data.dailyNewCases,
        fill: false,
        borderColor: '#f44336',
        tension: 0.4 // Change this to a valid value between 0 and 1
      },
      {
        label: 'Daily New Recovered',
        data: data.dailyNewRecovered, // use correct key here
        fill: false,
        borderColor: '#4caf50',
        tension:1 // Change this to a valid value between 0 and 1
      },
      {
        label: 'Daily New Deaths',
        data: data.dailyNewDeaths, // use correct key here
        fill: false,
        borderColor: '#9e9e9e',
        tension: 1 // Change this to a valid value between 0 and 1
      }
    ]
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (value) {
              return value.toLocaleString();
            },
            suggestedMin: 0,
            suggestedMax: 50000,
            stepSize: 5000
          },
          gridLines: {
            display: true,
            color: 'rgba(0, 0, 0, 0.05)'
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    maintainAspectRatio: false,
    responsive: true,
  };
  

  return (
    <div className="card covidGraph" >
      <div className="card-body">
        <h5 className="card-title text-center">Daily New Cases, Recovered, and Deaths of COVID-19 in India</h5>
        <hr />
        <div style={{ height: '329px', width: '692px', position: 'relative' }}>
  <Line data={chartData} options={options} />
</div>

      </div>
    </div>
  );

}
export default CovidBarGraph;
