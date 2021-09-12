import React from "react";
import './Friend.scss'
import userAvatar from "../../../assets/img/user-avatar.png";
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (
        <div className='friend'>
            <NavLink to={`/profile/${ props.id }` } >
                <img src={props.avatar !== null ? props.avatar : userAvatar} className='card-img-top rounded-circle img-fluid img-thumbnail' alt=""/>
            </NavLink>
            <span>{ props.friendName }</span>
        </div>
    )
}

export default Friend;