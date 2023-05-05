import { useState } from "react";

import card  from "../Crypto/pics/card.png"
function Cryptonavs() {
  return (
    <>
      <header>
      
  <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
    <div class="position-sticky">
      <div class="list-group list-group-flush mx-3 mt-4">
        <a href="#" class="list-group-item list-group-item-action py-2 ripple " aria-current="true">
          <i class="fas fa-tachometer-alt fa-fw me-3"></i>
          <span>Main dashboard</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
          <i class="fas fa-chart-area fa-fw me-3"></i>
          <span>Trade Profile</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
          <i class="fas fa-chart-line fa-fw me-3"></i>
          <span>Charts</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
          <i class="fas fa-chart-bar fa-fw me-3"></i>
          <span>Orders</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
          <i class="fas fa-wallet fa-fw me-3"></i>
          <span>Wallet</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
          <i class="fab fa-bitcoin fa-fw me-3"></i>
          <span>Buy/Sell Bitcoin</span>
        </a>
        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
          <i class="fas fa-globe fa-fw me-3"></i>
          <span>Guide</span>
        </a>
        <div className="mt-4">
        <button className="connect-wallet-button">Connect Wallet</button>
      </div>
      </div>
    </div>
  </nav>

        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <a className="navbar-brand" href="#">
              <img
                src={card}
                height="35"
                
                alt="MDB Logo"
                loading="lazy"
              />
            </a>

            <ul className="navbar-nav ms-auto d-flex flex-row">
              <li className="nav-item dropdown">
                <a
                  className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Some news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another news
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link me-3 me-lg-0" href="#">
                  <i className="fas fa-envelope"></i>
                  <span className="badge bg-danger">3</span>
                </a>
              </li>
              <li className="nav-item">
  <a className="nav-link me-3 me-lg-0" href="#">
    <i className="fas fa-chart-bar me-2"></i>
    Reports
  </a>
</li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                    className="rounded-circle"
                    height="27"
                    alt="Avatar"
                    loading="lazy"
                  />
                </a>
                
              </li>
            </ul>
          </div>
        </nav>
      </header>

 
    </>
  );
}

export default Cryptonavs;
