import "./MainHome.css";
import { Link } from "react-router-dom";

function MainHome() {
  return (
    <>
      <div className="specialPage">
      <div className="glow-text">
    <h1>Welcome</h1>
  </div>
        <div className="home-container">
          <Link to="/nasa">
            <div className="box">
              <div className="imgBx">
                <img src="https://i.gifer.com/BVLZ.gif" alt="Astronaut" />
              </div>

              <div className="content">
                <h2>
                  Nasa Dashboard <br /> <span>Click Me</span>
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/covid">
            <div className="box">
              <div className="imgBx">
                <img src="https://i.gifer.com/7ga1.gif" alt="Covid " />
              </div>
              <div className="content">
                <h2>
                  Covid Dashboard <br /> <span>Click Me</span>
                </h2>
              </div>
            </div>
          </Link>
          <Link to="/crypto">
            <div className="box">
              <div className="imgBx">
                <img src="https://i.gifer.com/g3KZ.gif" alt="Crypto " />
              </div>
              <div className="content">
                <h2>
                  Crypto Dashboard <br /> <span>Click Me</span>
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainHome;
