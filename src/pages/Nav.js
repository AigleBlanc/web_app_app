import React from 'react';
import { Link } from 'react-router-dom'

function Nav(){
    return (
        <nav className='tm-nav-container'>
            <div className='tm-nav-site-name'>
                <h3>EssoTravels</h3>
            </div>
            <ul  className='tm-nav-links'>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/pages/Trips">
                    <li>Your Trips</li>
                </Link>
                <Link to="/pages/Hotels">
                    <li>Our Hotels</li>
                </Link>
                <Link to="/pages/Register">
                    <li>Register</li>
                </Link>
                <Link to="/pages/Okay">
                    <li>Okay</li>
                </Link>
                <Link to="/pages/Base">
                    <li>Base</li>
                </Link>
                <Link to="/pages/Cart">
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;