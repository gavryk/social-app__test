import React, {useEffect} from "react";
import './Navbar.scss'
import { NavLink } from "react-router-dom";
import Friend from "../Friends/Friend/Friend";
import {getFriends} from "../../redux/friends-reducer";

const Navbar = (props) => {
    let state = props.friends;

    let friends = state.map((friend, index) => {
        return index <= 2 ? <Friend key={ friend.id } friendName={ friend.name } id={friend.id} avatar={ friend.photos.large } /> : ''
    })

    return(
        <div className='navigation shadow d-none d-md-flex d-flex align-items-start flex-wrap'>
            <nav className='menu-navigation col-12 p-0'>
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
                    {/*<li>*/}
                    {/*    <NavLink to="/music">Music</NavLink>*/}
                    {/*</li>*/}
                    <li>
                        <NavLink to="/users">Find Users</NavLink>
                    </li>
                    <li className='pt-4'>
                        <NavLink to="/settings">Settings</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="friendsList mt-auto col-12">
                <h2 className='text-left'>Friends</h2>
                <ul className='p-0 d-flex flex-column w-100'>
                    { friends }
                </ul>
                <NavLink to='/friends' className='btn btn-outline-success align-center btn-sm btn-block'>View All</NavLink>
            </div>
        </div>

    )
}

export default Navbar;