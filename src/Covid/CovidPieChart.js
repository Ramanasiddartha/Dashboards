import { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

function CovidPieChart() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('https://api.rootnet.in/covid19-in/stats/latest')
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const confirmed = data.summary ? data.summary.total : 0;
  const recovered = data.summary ? data.summary.discharged : 0;
  const deaths = data.summary ? data.summary.deaths : 0;

  const pieData = [
    { name: 'Confirmed', value: confirmed, color: '#007bff' },
    { name: 'Recovered', value: recovered, color: '#28a745' },
    { name: 'Deaths', value: deaths, color: '#dc3545' }
  ];

  return (
    <div className="card h-100">
    <div className="card-body" style={{marginTop: '60px'}}>
      <h5 className="card-title text-center">COVID-19 India Statistics</h5>
      <hr />
      <PieChart width={400} height={390} style={{marginLeft:'70px'}}>
        <Pie
          dataKey="value"
          data={pieData}
          cx={170}
          cy={170}
          outerRadius={100}
          fill="#8884d8"
          label
          startAngle={90}
          endAngle={-270}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend verticalAlign="top" height={26} />
        <Tooltip />
      </PieChart>
    </div>
  </div>
  
  );
}

export default CovidPieChart;
