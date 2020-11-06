import React from "react";
import './Navbar.scss'
import { NavLink } from "react-router-dom";
import userAvatar from "../../img/Post-img/user-avatar.png";

const Navbar = (props) => {


    let friends = props.friends.map((friend) => {
        return (
            <li className='d-flex'>
                <img className='user-avatar mr-2 mb-2' src={ userAvatar } alt=""/>
                { friend.name }
            </li>
        )
    })

    return(
        <div className='navigation shadow rounded d-none d-md-flex d-flex align-items-start flex-column'>
            <nav className='menu-navigation'>
                <ul className='p-0'>
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
            <div className="friendsList mt-auto">
                <h2 className='text-left'>Friends</h2>
                <ul className='p-0 d-flex flex-column w-100'>
                    { friends }
                </ul>
            </div>
        </div>

    )
}

export default Navbar;