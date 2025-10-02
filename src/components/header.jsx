import React from 'react';
import hanubridgeLogo from '../assets/logo-hanubridge.png';
import './Header.css'; // import custom CSS
import { Link } from 'react-router-dom';
function Header() {
  return (

    <header>
      <nav className="navbar navbar-expand-lg navbar-custom shadow">
        <div className="container-fluid px-4">
          {/* Brand */}
          {/* <a className="navbar-brand" href="#">
            <img src={hanubridgeLogo} alt="Hanubridge Logo"
            style={{ height: '50px' }}
            />
          </a> */}

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
           <ul className="navbar-nav d-flex justify-content-between m-auto mb-2 mb-lg-0 gap-3">
 <li className="nav-item">
  <Link className="nav-link fw-bold active" to="/">Home</Link>
</li>
<li className="nav-item">
  <Link className="nav-link fw-bold" to="/about">About Us</Link>
</li>

  <li className="nav-item">
     <Link className="nav-link fw-bold" to="/service">Services</Link>
    
  </li>
  <li className="nav-item">
     <Link className="nav-link fw-bold" to="/blog">Blog</Link>
  </li>
  <li className="nav-item">
     <Link className="nav-link fw-bold" to="/contact">Contact Us</Link>
   
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
