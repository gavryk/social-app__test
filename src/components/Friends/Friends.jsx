import React from "react";
import './Friends.scss'
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let state = props.store.friendsPage;

    let friends = state.friends.map((friend) => {
        return (
            <div className='friend col-3'>
                <Friend friendName={ friend.name } avatar={ friend.avatar }/>
            </div>
        )
    })
    return (
        <div className='friend-page'>
            <h1 className='title pb-2 border-bottom'>Friends</h1>
            <div className="all-friends__wrapper d-flex justify-content-start flex-wrap">
                { friends }
            </div>
        </div>
    )
}

export default Friends;