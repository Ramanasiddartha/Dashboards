import { useState, useEffect } from 'react';
import './Nasa.css';

function NasaMain({ setLoading, loaded }) {
  const [apods, setApods] = useState([]);
  const [errorStatus, setErrorStatus] = useState(null);

  useEffect(() => {
    const fetchApods = async () => {
      setLoading(true); // start loading
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=zkJ0e8PcZvm451nSHzHMTR0fXA94EvEFbT42JODr&count=13`);
        const data = await response.json();
        setApods(data);
      } catch (error) {
        if (error.response) {
       
          setErrorStatus(error.response.status);
        } else if (error.request) {
         
          setErrorStatus(500); // server error
        } else {
    
          setErrorStatus(400); // client error
        }
      } finally {
        setLoading(false); // stop loading
      }
    };

    fetchApods();
  }, [setLoading]);

  return (
    <>
      <div className={loaded ? "grid-container" : "grid-container hidden"}>
        {apods.length > 0 && apods.map((apod) => (
          <div key={apod.date} className="grid-item">
            <img src={apod.url} alt={apod.title} />
            <div className="title">{apod.title}</div>
          </div>
        ))}
        {errorStatus === 500 && (
          <div>
            There was an error connecting to the server. Please try again later.
          </div>
        )}
        {errorStatus === 400 && (
          <div>
            There was an error with your request. Please check your network connection and try again.
          </div>
        )}
        {errorStatus === 401 && (
          <div>
            You are not authorized. Please login with valid credentials.
          </div>
        )}
        {errorStatus === 404 && (
          <div>
            The resource you are looking for was not found. Please check the URL and try again.
          </div>
        )}
        {errorStatus === 429 && (
          <div>
            Too many requests have been made to the server. Please try again later.
          </div>
        )}
      </div>
      <footer className="bg-dark text-white py-1">
        <div className="container">
          <div className="row d-flex align-items-end">
            <div className="col-md-6">
              <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="NASA Logo" height="50" />
              <span className="ms-2 align-middle">National Aeronautics and Space Administration</span>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
              <div className="d-flex align-items-end">
                <a href="https://www.nasa.gov/about/contact/index.html" className="text-white me-3">Contact NASA</a>
                <a href="https://www.nasa.gov/about/highlights/HP_Privacy.html" className="text-white me-3">Privacy Policy</a>
                <a href="https://www.nasa.gov/about/highlights/HP_Terms_of_Use.html" className="text-white">Terms of Use</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

function Nasa() {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      setLoaded(true);
    }
  }, [loading]);

  return (
    <div className="loading-wrapper">
      {loading && (
        <div className="loading-overlay">
          <img className="loading-gif" src="https://i.gifer.com/TEcu.gif" alt="Loading..." />
        </div>
      )}
      <NasaMain setLoading={setLoading} loaded={loaded} />
    </div>
  );
}

export default Nasa;
