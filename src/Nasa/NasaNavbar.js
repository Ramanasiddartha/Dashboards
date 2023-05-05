import NASA_logo from "./NASA_logo.svg.png";
import stars from "./stars.jpg";
import { FaShare } from 'react-icons/fa';

function NasaNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-0 " style={{ backgroundImage: `url(${stars})` }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={NASA_logo} alt="NASA Logo" width="120" height="100" className="d-inline-block align-text-top me-2" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mission
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                <li><a className="dropdown-item text-white" href="#">Artemis-1</a></li>
                <li><a className="dropdown-item text-white" href="#">James Webb Space Telescope</a></li>
                <li><a className="dropdown-item text-white" href="#">Hubble Space Telescope</a></li>
                <li><a className="dropdown-item text-white" href="#">Juno: Mission at Jupiter</a></li>
                <li><a className="dropdown-item text-white" href="#">International Space Station</a></li>
                <li><a className="dropdown-item text-white" href="#">Perseverance Mars Rover</a></li>
                <li><a className="dropdown-item text-white" href="#">Parker Solar Probe</a></li>
                <li><a className="dropdown-item text-white" href="#">Quesst</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" id="galleriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Galleries
              </a>
              <ul className="dropdown-menu" aria-labelledby="galleriesDropdown">
                <li><a className="dropdown-item" href="#">Image of the Day</a></li>
                <li><a className="dropdown-item" href="#">Image Galleries</a></li>
                <li><a className="dropdown-item" href="#">Ultra High-Def Videos</a></li>
                <li><a className="dropdown-item" href="#">Usage and Copyright</a></li>
                <li><a className="dropdown-item" href="#">Videos</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" id="galleriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Follow NASA</a>
              <ul className="dropdown-menu" aria-labelledby="galleriesDropdown">
                <li><a className="dropdown-item" href="#">Get Involved</a></li>
                <li><a className="dropdown-item" href="#">NASA Blogs</a></li>
                <li><a className="dropdown-item" href="#">NASA Live</a></li>
                <li><a className="dropdown-item" href="#">NASA Newsletter</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">NASA TV</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" id="galleriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Downloads</a>
              <ul className="dropdown-menu" aria-labelledby="galleriesDropdown">
                <li><a className="dropdown-item" href="#">Apps</a></li>
                <li><a className="dropdown-item" href="#">Audio,Ringtones</a></li>
                <li><a className="dropdown-item" href="#">E-books</a></li>
                <li><a className="dropdown-item" href="#">Podcasts</a></li>
                <li><a className="dropdown-item" href="#">Third Rock Radio</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" id="galleriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
              <ul className="dropdown-menu" aria-labelledby="galleriesDropdown">
                <li><a className="dropdown-item" href="#">About</a></li>
                <li><a className="dropdown-item" href="#">Astronauts</a></li>
                <li><a className="dropdown-item" href="#">Careers@Nasa</a></li>
                <li><a className="dropdown-item" href="#">Leadership</a></li>
                <li><a className="dropdown-item" href="#">Locations</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" id="galleriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">NASA Audience</a>
              <ul className="dropdown-menu" aria-labelledby="galleriesDropdown">
                <li><a className="dropdown-item" href="#">For Media</a></li>
                <li><a className="dropdown-item" href="#">For Educators</a></li>
                <li><a className="dropdown-item" href="#">For Students</a></li>
              </ul>
            </li>
          </ul>
          <div className="d-flex"  style={{marginRight: '30px'}}>
            <input type="text" className="form-control me-2" placeholder="Search" />
            <button className="btn btn-outline-light"><FaShare /></button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NasaNavbar;
