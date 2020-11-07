import React from "react";
import './Post.scss'
import userAvatar from '../../../../img/user-avatar.png'

const Post = (props) => {
    return(
        <div className='single-post pt-4 pb-4 mb-2'>
            <div className="row">
                <div className='user-avatar col-2 text-center'>
                    <img src={ userAvatar } alt=""/>
                </div>
                <div className="post-text col-10">
                    <h3>{props.message}</h3>
                    <div className="like-count">
                        <span>Like: {props.like}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;