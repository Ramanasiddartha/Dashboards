import { useState, useEffect } from "react";
import axios from "axios";
import CovidPieChart from "./CovidPieChart";
import CovidBarGraph from "./CovidBarGraph";
import SideNav from "./SideNav";
import "./covid.css";
function CovidHome() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.rootnet.in/covid19-in/stats/latest")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true); //  loading component
    axios
      .get("https://api.rootnet.in/covid19-in/stats/latest")
      .then((response) => {
        setData(response.data.data);
        setTimeout(() => setIsLoading(false), 2000);
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
          src="https://media.giphy.com/media/9LDsKs4ZpZzfZmwev6/giphy.gif"
          alt="loading spinner"
        />{" "}
      </div>
    );
  }
  return (
    <>
      <SideNav />
      <h1 className="text-center mt-5 text-right overalltext">Overall Stats </h1>
      <div className="col-lg-10 offset-lg-2">
        <div className="row d-flex flex-wrap">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100 mx-2">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title mb-2">Total Cases</h5>
                <p
                  className="card-text mb-0 text-primary"
                  style={{ fontSize: "2rem" }}
                >
                  {data.summary && data.summary.total}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title mb-2">Total Deaths</h5>
                <p
                  className="card-text mb-0 text-primary"
                  style={{ fontSize: "2rem" }}
                >
                  {data.summary && data.summary.deaths}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title mb-2">Total Recovered</h5>
                <p
                  className="card-text mb-0 text-primary"
                  style={{ fontSize: "2rem" }}
                >
                  {data.summary && data.summary.discharged}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title mb-2">Total Active</h5>
                <p
                  className="card-text mb-0 text-primary"
                  style={{ fontSize: "2rem" }}
                >
                  {data.summary &&
                    data.summary.total -
                      data.summary.deaths -
                      data.summary.discharged}
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="covidContentSection">
              <CovidBarGraph />
            </div>
            <div className="covidContentSection">
              <CovidPieChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CovidHome;
