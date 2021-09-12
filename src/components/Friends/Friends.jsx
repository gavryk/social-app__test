import React from "react";
import './Friends.scss'
import Friend from "./Friend/Friend";
import Paginator from "../common/Paginator/Paginator";

const Friends = ({totalUserCount, pageSize, currentPage, onChangedFrPage, ...props}) => {
    let state = props.friends;

    let friends = state.map(friend => {
        return <div key={friend.id} className='friend col-3'>
            <Friend friendName={ friend.name } key={ friend.id } avatar={ friend.photos.large }/>
        </div>
    })
    return (
        <div className='friend-page'>
            <h1 className='title pb-2 border-bottom'>Friends</h1>
            <Paginator
                totalItemCount={ totalUserCount }
                pageSize={ pageSize }
                onChangedPage={ onChangedFrPage }
                currentPage={ currentPage }
            />
            <div className="all-friends__wrapper d-flex justify-content-start flex-wrap">
                { friends }
            </div>
        </div>
    )
}

export default Friends;