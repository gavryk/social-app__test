import React from "react";
import './MyPosts.scss'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let posts = props.posts.map((post) => {
        return <Post message={post.message} key={post.id} like={post.like}/>
    })

    let newPostEl = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChanges = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return(
        <div className='posts__wrapper'>
            <h2>My Posts</h2>
            <div className="post-input">
                <textarea
                    onChange={ onPostChanges }
                    className="form-control form-control-lg h-25"
                    placeholder="Add New Post"
                    ref={ newPostEl }
                    value={props.newPostText}
                />
                <button className='btn btn-success' onClick={ onAddPost }>Add Post</button>
            </div>
            <div className="posts-output pt-3">
                { posts }
            </div>
        </div>
    )
}

export default MyPosts;