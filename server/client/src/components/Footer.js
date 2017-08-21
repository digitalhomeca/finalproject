import React from 'react';
import {Link} from 'react-router';

function Footer (props) {
    return (
      <div>
        <footer className="page-footer blue darken-3 ">
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text">Digital Home</h5>
                  <p className="grey-text text-lighten-4">A bunch of text saying mindless things will go here. Stuff that really doesn't make sense and no one reads.</p>


                </div>
                <div className="col l3 s12">
                  <h5 className="white-text">More Info</h5>
                  <ul>
                     {/* <li><Link to = "/" className="white-text"> Home </Link></li>  */}
                    <li><Link to = "/about" className="white-text"> About Us </Link></li>
                    <li><Link to = "/contact" className="white-text"> Contact Us </Link></li>
                    {/* <li><Link to = "/blog" className="white-text"> Blog </Link></li> 
                    <li><Link to = "/movies" className="white-text"> Movies </Link></li> */}
                  </ul>
                </div>
                <div className="col l3 s12">
                  <h5 className="white-text"> Learn More About </h5>
                  <ul>
                    <li><a className="white-text" href="https://www.joomla.org/">Joomla</a></li>
                    <li><a className="white-text" href="https://wordpress.org/">WordPress</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
      <div className="container">
      Copyright <a className="orange-text text-lighten-3" href="http://digitalhomecanada.com">Digital Home Canada</a> 2017.
      </div>
    </div>
  </footer>
          
        </div>
  );
  }

export default Footer;


