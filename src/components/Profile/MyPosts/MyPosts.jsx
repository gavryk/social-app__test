import React from "react";

import './MyPosts.scss'
import Post from "./Post/Post";

const MyPosts = () => {
    return(
        <div className='posts__wrapper'>
            <h2>My Posts</h2>
            <div className="post-input">
                <textarea className="form-control" placeholder="Add New Post"/>
                <button className='btn btn-success'>Add Post</button>
            </div>
            <div className="posts-output">
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;