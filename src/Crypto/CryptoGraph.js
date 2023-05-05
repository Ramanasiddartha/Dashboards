import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const CryptoGraph = () => {
  const [coinData, setCoinData] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoinData(result.data);
  
    };
    fetchData();
  }, []);
  console.log(coinData);
  useEffect(() => {
    const fetchPriceData = async () => {
      if (selectedCoin) {
        const result = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=7`
        );
        setPriceData(result.data.prices);
      }
    };
    fetchPriceData();
  }, [selectedCoin]);

  const handleChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  const selectedCoinData = coinData.find((coin) => coin.id === selectedCoin);

  const chartData = {
    labels: priceData.map((data) => {
      const date = new Date(data[0]);
      return `${date.getDate()}/${date.getMonth() + 1}`;
    }),
    datasets: [
      {
        label: `Price of ${selectedCoinData?.name}`,
        data: priceData.map((data) => data[1]),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <div className="Graphcard graphcard" >
        <h2 style={{ marginBottom: "10px" }}>Crypto Prices</h2>
        <select
          value={selectedCoin}
          onChange={handleChange}
          style={{
            fontSize: "16px",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "20px",
          }}
        >
          <option value="">Select a coin</option>
          {coinData.map((coin) => (
            <option value={coin.id} key={coin.id}>
              {coin.name}
            </option>
          ))}
        </select>
        {selectedCoinData && (
          <div className="container mt-5">
            <Line data={chartData} />
          </div>
        )}
      </div>
 </>
  );
};

export default CryptoGraph;
