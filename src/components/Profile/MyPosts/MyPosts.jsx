import React from "react";

import './MyPosts.scss'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = props.posts.map((post) => {
        return <Post message={post.message} like={post.like}/>
    })

    let newPostEl = React.createRef()

    let addPost = () => {
        let text = newPostEl.current.value;
        props.addPost(text);

        newPostEl.current.value = '';
    }

    return(
        <div className='posts__wrapper'>
            <h2>My Posts</h2>
            <div className="post-input">
                <textarea className="form-control" placeholder="Add New Post" ref={newPostEl}/>
                <button className='btn btn-success' onClick={ addPost }>Add Post</button>
            </div>
            <div className="posts-output pt-3">
                { posts }
            </div>
        </div>
    )
}

export default MyPosts;