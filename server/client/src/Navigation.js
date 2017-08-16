import React from 'react';
import {Link} from 'react-router';

function Navigation (props) {
    return (
        <div>
            <h2> navigation </h2>
            <nav >
            <ul className="nav nav-tabs">    
              <li><Link to = "/"> Home </Link></li>
              <li><Link to = "/about"> About Us </Link></li>
              <li><Link to = "/blog"> Blog </Link></li>
              <li><Link to = "/contact"> Contact Us </Link></li>
              
            </ul>
          </nav>
          
        </div>
  );
  }

export default Navigation;