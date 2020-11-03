import React from "react";

import './MyPosts.scss'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.posts.map((post) => {
        return <Post message={post.message} like={post.like}/>
    })

    return(
        <div className='posts__wrapper'>
            <h2>My Posts</h2>
            <div className="post-input">
                <textarea className="form-control" placeholder="Add New Post"/>
                <button className='btn btn-success'>Add Post</button>
            </div>
            <div className="posts-output pt-3">
                { posts }
            </div>
        </div>
    )
}

export default MyPosts;