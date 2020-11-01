import React from "react";
import './Post.scss'
import userAvatar from '../../../../img/Post-img/user-avatar.png'

const Post = () => {
    return(
        <div className='single-post pt-4 pb-4'>
            <div className="row">
                <div className='user-avatar col-2 text-center'>
                    <img src={userAvatar} alt=""/>
                </div>
                <div className="post-text col-10">
                    <h2>Hello I'm Post</h2>

                </div>
            </div>
        </div>
    )
}

export default Post;