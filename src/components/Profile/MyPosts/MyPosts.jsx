import React from "react";

import './MyPosts.scss'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi', like: 15},
        {id: 2, message: 'What"s your name?', like: 20},
        {id: 3, message: 'Yo', like: 35},
        {id: 4, message: 'Hello', like: 150},
        {id: 5, message: 'What?', like: 154}
    ]

    let posts = postData.map((post) => {
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