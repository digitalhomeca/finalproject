import React from 'react';
import {Link} from 'react-router';

function Navigation (props) {
    return (
        <div>
          <div className="navbar-fixed">
          <nav className="blue darken-4">
          <div className="nav-wrapper container"><a id="logo-container" href="/" className="brand-logo">Digital Home </a>
          <ul className="right hide-on-med-and-down">
              {/* <li><Link to = "/"> Home </Link></li> */}
               <li><Link to = "/about"> About Us </Link></li>
              <li><Link to = "/contact"> Contact Us </Link></li> 
              <li><Link to = "/blog"> Blog </Link></li>
              
              <li><Link to = "/movies"> Movies </Link></li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
              {/* <li><Link to = "/"> Home </Link></li> */}
              {/* <li><Link to = "/about"> About Us </Link></li>
              <li><Link to = "/contact"> Contact Us </Link></li> */}
              <li><Link to = "/blog"> Blog </Link></li>
              
              <li><Link to = "/movies"> Movies </Link></li>
          </ul>
          <a href="/" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
          </div>
          </nav>
          </div>
        </div>
  )
  }

export default Navigation;