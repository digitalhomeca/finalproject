import React from 'react';
import {Link} from 'react-router';

function Navigation (props) {
    return (
        <div>

          <nav className="light-teal lighten-1">
          <div className="nav-wrapper container"><a id="logo-container" href="/" className="brand-logo">Digital Home Canada</a>
          <ul className="right hide-on-med-and-down">
              <li><Link to = "/"> Home </Link></li>
              <li><Link to = "/about"> About Us </Link></li>
              <li><Link to = "/blog"> Blog </Link></li>
              <li><Link to = "/contact"> Contact Us </Link></li>
              <li><Link to = "/starwars"> Star Wars </Link></li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
              <li><Link to = "/"> Home </Link></li>
              <li><Link to = "/about"> About Us </Link></li>
              <li><Link to = "/blog"> Blog </Link></li>
              <li><Link to = "/contact"> Contact Us </Link></li>
          </ul>
          <a href="/" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
          </nav>
          
        </div>
  )
  }

export default Navigation;