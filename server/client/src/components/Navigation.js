import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery'
// import {SideNav} from 'react-materialize';

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

                        <ul id="nav-mobile" className="side-nav">
                            <li><Link to="/"> Home </Link></li>
                            <li><Link to="/about"> About </Link></li>
                            <li><Link to="/contact"> Contact </Link></li>
                            <li><Link to="/blog"> Blog </Link></li>
                            <li><Link to="/movies"> Movies </Link></li>
                        </ul>
                        <Link to="/" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></Link>




                        {/* <ul id="slide-out" className="side-nav">
                            <li><div className="user-view">
                            <div className="background">
                                <img src="images/office.jpg"/>
                            </div>
                            <a href="#!user"><img className="circle" src="images/yuna.jpg"/></a>
                            <a href="#!name"><span className="white-text name">John Doe</span></a>
                            <a href="#!email"><span className="white-text email">jdandturk@gmail.com</span></a>
                            </div></li>
                            <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                            <li><a href="#!">Second Link</a></li>
                            <li><div className="divider"></div></li>
                            <li><a className="subheader">Subheader</a></li>
                            <li><a className="waves-effect" href="https://www.google.com/finance">Third Link With Waves</a></li>
                            <li><Link to="/about"> About </Link></li>
                      </ul>
                      <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a> */}

                       

                    </div>
                </nav>
            </div>

        </div>
    )
}

$(document).ready(function(){
    $(".button-collapse").sideNav(); 

})

export default Navigation;

