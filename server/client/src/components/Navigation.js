import React from 'react';
import { Link } from 'react-router';

function Navigation(props) {
    return (
        <div>

            <div className="navbar-fixed">

                <nav className="blue darken-4" role="navigation">
                    <div className="nav-wrapper container">
                        <Link to="/" id="logo-container" className="brand-logo left"> Digital Home</Link>
                        <ul className="right">
                            <li className="hide-on-med-and-down"><Link to="/about"> About</Link></li>
                            <li className="hide-on-med-and-down"><Link to="/contact"> Contact </Link></li>
                            <li><Link to="/wp"> Blog </Link></li>
                            <li><Link to="/movies"> Movies </Link></li>
                        </ul>

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navigation;

