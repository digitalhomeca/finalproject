import React from 'react';
import { Link } from 'react-router';
// import $ from 'jquery';
// import {sideNav} from 'materialize-css';

function Navigation(props) {
    return (

        <div>

            <div className="navbar-fixed">

                <nav className="blue darken-4" role="navigation">
                    <div className="nav-wrapper container">
                        <Link to="/" id="logo-container" className="brand-logo"> Digital Home</Link>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/about"> About</Link></li>
                            <li><Link to="/contact"> Contact </Link></li>
                            <li><Link to="/blog"> Blog </Link></li>

                            <li><Link to="/movies"> Movies </Link></li>
                        </ul>

                        <ul id="nav-mobile side-nav">
                            <li><Link to="/"> Home </Link></li>
                            <li><Link to="/about"> About </Link></li>
                            <li><Link to="/contact"> Contact </Link></li>
                            <li><Link to="/blog"> Blog </Link></li>
                            <li><Link to="/movies"> Movies </Link></li>
                        </ul>

                        <Link to="/" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></Link>

                    </div>
                </nav>
            </div>
        </div>
    )
}

// $( document ).ready(function(){
//     $(".button-collapse").sideNav();

// }) 
export default Navigation;

