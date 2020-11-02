import React from "react";
import './Navbar.scss'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className='navigation shadow rounded'>
            <ul>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs">Message</NavLink>
                </li>
                <li>
                    <NavLink to="/news">News</NavLink>
                </li>
                <li>
                    <NavLink to="/music">Music</NavLink>
                </li>
                <li className='pt-4'>
                    <NavLink to="/settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;