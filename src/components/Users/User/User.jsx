import {NavLink} from "react-router-dom";
import userAvatar from "../../../assets/img/user-avatar.png";
import React from "react";


const User = ({ id, photos, name, status, followed, ...props }) => {
    return (
        <div className='user card col-lg-4 col-md-6 col-xs-12  mb-4 min-h-100'>
            <NavLink to={`/profile/${ id }` }>
                <img src={photos.large !== null ? photos.large : userAvatar} className='card-img-top img-fluid img-thumbnail' alt=""/>
            </NavLink>
            <div className="card-body text-center">
                <h5 className="card-title">{ name }</h5>
                <p className="card-text">{ status }</p>
                <button
                    disabled={props.followingInProgress.some(id => id === id)}
                    onClick={() => {
                        !followed
                            ? props.followThunk(id)
                            : props.unFollowThunk(id)
                    }}
                    className={`btn ${!followed ? 'btn-success' : 'btn-danger'}`}
                >
                    {!followed ? 'Follow' : 'Unfollow'}
                </button>
            </div>
        </div>
    )
}

export default User;