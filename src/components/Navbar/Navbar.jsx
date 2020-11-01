import React from "react";
import './Navbar.scss'

const Navbar = () => {
    return(
        <nav className='success shadow rounded'>
            <li><a href="/">Profile</a></li>
            <li><a href="/">Message</a></li>
            <li><a href="/">News</a></li>
            <li><a href="/">Music</a></li>
            <li><a href="/">Settings</a></li>
        </nav>
    )
}

export default Navbar;