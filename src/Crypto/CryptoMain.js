import Cryptonavs from "./Cryptonavs";
import bitcoin from "../Crypto/pics/bitcoin.png";
import ethereum from "../Crypto/pics/ethereum.png";
import Litecoin from "../Crypto/pics/Litecoin.jpg";
import doge from "../Crypto/pics/doge.png";
import "./Crypto.css";
import { useEffect, useState } from "react";
import CryptoGraph from "./CryptoGraph";
import recent from "../Crypto/pics/recent.png";
import assets from "../Crypto/pics/assets.png";

function Cryptomain() {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [ethereumPrice, setEthereumPrice] = useState(null);
  const [litecoinPrice, setLitecoinPrice] = useState(null);
  const [dogecoinPrice, setDogecoinPrice] = useState(null);
  const [marketStatus, setMarketStatus] = useState(null);
  const [assetData, setAssetData] = useState(null);
  const dogecoinChange = 0.05;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const [bitcoinData, ethereumData, litecoinData, dogecoinData] =
          await Promise.all([
            fetch(
              "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
            ).then((res) => res.json()),
            fetch(
              "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
            ).then((res) => res.json()),
            fetch(
              "https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd"
            ).then((res) => res.json()),
            fetch(
              "https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd"
            ).then((res) => res.json()),
          ]);
        setIsLoading(false);

        setBitcoinPrice(bitcoinData.bitcoin.usd);
        setEthereumPrice(ethereumData.ethereum.usd);
        setLitecoinPrice(litecoinData.litecoin.usd);
        setDogecoinPrice(dogecoinData.dogecoin.usd);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };
    fetchPrices().catch((error) => {
      console.error("Error fetching prices:", error);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true); // Show loading component
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    )
      .then((response) => {
        setTimeout(() => setIsLoading(false), 2000); // Hide loading component after 2 seconds
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <img
          src="https://media.giphy.com/media/EIOKH2p0wqgl9KW5fg/giphy.gif"
          alt="loading spinner"
        />
      </div>
    );
  }
  return (
    <>
      <Cryptonavs />
      <div className="mt-5">
        <div className="crypto-section">
          <div className="crypto-top-card">
            <div className="crypto-card card1">
              <div className="card-body ">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="circle">
                    <img src={bitcoin} alt="coin logo" />
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="rectangle">
                      <span>Buy</span>
                    </div>
                    <div className="rectangle">
                      <span>Trade</span>
                    </div>
                  </div>
                </div>
                <h5 className="card-title cryptotitle">Bitcoin</h5>
                <p className="card-text cryptotext">
                  {bitcoinPrice ? `$${bitcoinPrice}` : "Loading..."}
                </p>
                {bitcoinPrice === null && (
                  <p className="error-message">
                    Error: Failed to fetch bitcoinPrice
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="crypto-top-card">
            <div className="crypto-card card2 ">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="circle">
                    <img src={ethereum} alt="coin logo" />
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="rectangle">
                      <span>Buy</span>
                    </div>
                    <div className="rectangle">
                      <span>Trade</span>
                    </div>
                  </div>
                </div>
                <h5 className="card-title cryptotitle">Ethereum</h5>
                <p className="card-text cryptotext">
                  {ethereumPrice ? `$${ethereumPrice}` : "Loading..."}
                </p>
                {ethereumPrice === null && (
                  <p className="error-message">
                    Error: Failed to fetch Ethereum price
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="crypto-top-card">
            <div className="crypto-card card3 ">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="circle">
                    <img src={Litecoin} alt="coin logo" />
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="rectangle">
                      <span>Buy</span>
                    </div>
                    <div className="rectangle">
                      <span>Trade</span>
                    </div>
                  </div>
                </div>
                <h5 className="card-title cryptotitle">Litecoin</h5>
                <p className="card-text cryptotext">
                  {litecoinPrice ? `$${litecoinPrice}` : "Loading..."}
                </p>
                {litecoinPrice === null && (
                  <p className="error-message">
                    Error: Failed to fetch Ethereum price
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="crypto-top-card">
            <div className="crypto-card card4">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="circle">
                    <img src={doge} alt="coin logo" />
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="rectangle">
                      <span>Buy</span>
                    </div>
                    <div className="rectangle">
                      <span>Trade</span>
                    </div>
                  </div>
                </div>
                <h5 className="card-title cryptotitle">Dogecoin</h5>
                <p className="card-text cryptotext">
                  {dogecoinPrice ? `$${dogecoinPrice}` : "Loading..."}
                </p>
                {dogecoinPrice === null && (
                  <p className="error-message">
                    Error: Failed to fetch Ethereum price
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="graph-card-section">
        <CryptoGraph />

        <div className="crypto-card marketcard crypto-side-card">
          <div className="card-body">
            <h5 className="card-title">Market Status</h5>
            <hr />
            <p className="card-text">
              Total Market Cap: <span>$2.3T</span>
            </p>
            <p className="card-text">
              24h Volume: <span>$190B</span>
            </p>
            <p className="card-text">
              Bitcoin Dominance: <span>45.8%</span>
            </p>
            <p className="card-text">
              Total Cryptocurrencies: <span>10,000</span>
            </p>
            <p className="card-text">
              Total Exchanges: <span>500</span>
            </p>
            <p className="card-text">Top Gainers (24h):</p>
            <ul>
              <li>
                Ethereum: <span className="positive">+8.2%</span>
              </li>
              <li>
                Cardano: <span className="positive">+6.5%</span>
              </li>
              <li>
                Polygon: <span className="positive">+4.3%</span>
              </li>
            </ul>
            <p className="card-text">Top Losers (24h):</p>
            <ul>
              <li>
                Bitcoin Cash: <span className="negative">-3.1%</span>
              </li>
              <li>
                Litecoin: <span className="negative">-2.7%</span>
              </li>
              <li>
                Chainlink: <span className="negative">-1.9%</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="crypto-card card1 crypto-side-card"
          style={{ height: "250px" }}
        >
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center">
                <div className="circle mr-4">
                  <img
                    src={bitcoin}
                    alt="coin logo"
                    className="align-self-center"
                  />
                </div>
                <div className="d-flex flex-column">
                  <h5 className="card-title cryptotitle">
                    Recent Transactions
                  </h5>{" "}
                  <hr
                    style={{ width: "100%", height: "2px", margin: "10px 0" }}
                  />
                  <div className="d-flex flex-column text-center">
                    <div className="d-flex flex-column">
                      <p className="card-text cryptotext mb-1">
                        Bitcoin Purchased
                      </p>
                      <p className="card-text cryptotext">
                        {bitcoinPrice ? `$${bitcoinPrice}` : "Loading..."}
                      </p>
                      {bitcoinPrice === null && (
                        <p className="error-message">
                          Error: Failed to fetch bitcoinPrice
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <hr />
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center">
                <div className="circle mr-3">
                  <img src={ethereum} alt="coin logo" />
                </div>
                <div className="d-flex flex-column text-center">
                  <div className="d-flex flex-column">
                    <p className="card-text cryptotext mb-0">
                      Ethereum Purchased
                    </p>
                    <p className="card-text cryptotext">
                      {ethereumPrice ? `$${ethereumPrice}` : "Loading..."}
                    </p>
                    {ethereumPrice === null && (
                      <p className="error-message">
                        Error: Failed to fetch Ethereum price
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="crypto-card assetcard crypto-side-card">
          <div className="card-body text-center">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center">
                <div className="circle mr-3">
                  <img src={assets} alt="coin logo" />
                </div>
                <div className="d-flex flex-column">
                  <h5
                    className="card-title cryptotitle"
                    style={{
                      color: "black",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Assets
                  </h5>
                </div>
              </div>
            </div>
            <br />
            <div className="table-table-sm table-borderless">
              <table
                className="table table-sm table-borderless mb-4"
                style={{ fontSize: "16px", fontFamily: "Roboto, sans-serif" }}
              >
                <thead>
                  <tr>
                    <th>Metrics</th>
                    <th>Current Price</th>
                    <th>Market Value</th>
                    <th>Profit/Loss</th>
                    <th>Volume</th>
                    <th>Total Supply</th>
                    <th>24h Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Bitcoin:</td>
                    <td>$10,000</td>
                    <td>$1,000</td>
                    <td style={{ color: "black" }}>+$100</td>
                    <td>1000</td>
                    <td>1,000,000</td>
                    <td className="positive">+3.2%</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Ethereum:</td>
                    <td>$20,000</td>
                    <td>$2,000</td>
                    <td style={{ color: "black" }}>+$200</td>
                    <td>2000</td>
                    <td>2,000,000</td>
                    <td className="negative">-1.5%</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: "bold" }}>Doge:</td>
                    <td>$30,000</td>
                    <td>$3,000</td>
                    <td style={{ color: "black" }}>+$300</td>
                    <td>3000</td>
                    <td>3,000,000</td>
                    <td className="positive">+2.8%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cryptomain;
