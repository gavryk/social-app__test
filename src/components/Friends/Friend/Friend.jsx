import React from "react";
import './Friend.scss'
import userAvatar from "../../../assets/img/user-avatar.png";

const Friend = (props) => {
    return (
        <div className='friend'>
            <img className='user-avatar mr-2 mb-2' src={ props.avatar ? props.avatar : userAvatar }  alt=""/>
            { props.friendName }
        </div>
    )
}

export default Friend;