import React from 'react';
import hanubridgeLogo from '../assets/logo-hanubridge.png';
import './Header.css'; // import custom CSS

function Header() {
  return (

    <header>
      <nav className="navbar navbar-expand-lg navbar-custom fixed-top shadow">
        <div className="container-fluid px-4">
          {/* Brand */}
          <a className="navbar-brand" href="#">
            <img src={hanubridgeLogo} alt="Hanubridge Logo"
            style={{ height: '50px' }}
            />
          </a>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 me-4">
  <li className="nav-item">
    <a className="nav-link fw-bold active" href="#">Home</a> {/* Active link */}
  </li>
  <li className="nav-item">
    <a className="nav-link fw-bold" href="#">About Us</a>
  </li>
  <li className="nav-item">
    <a className="nav-link fw-bold" href="#">Services</a>
  </li>
  <li className="nav-item">
    <a className="nav-link fw-bold" href="#">Blog</a>
  </li>
  <li className="nav-item">
    <a className="nav-link fw-bold" href="#">Contact Us</a>
  </li>
</ul>


            {/* Search button */}
            <form className="d-flex">
              <button className="btn-search" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
