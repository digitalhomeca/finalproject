import React from 'react';
// import {Link} from 'react-router';

function Footer (props) {
    return (
        <div>
<footer className="page-footer orange">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Site Information</h5>
          <p className="grey-text text-lighten-4">A bunch of text saying mindless things will go here. Stuff that really doesn't make sense and no one reads.</p>


        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Interesting Links</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <h5 className="white-text">More Links </h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
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


