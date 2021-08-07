import React from "react";
import './MyPosts.scss'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let posts = props.posts.map((post) => {
        return <Post message={post.message} key={post.id} like={post.like}/>
    })

    let onAddPost = (post) => {
        props.addPost(post.newPost);
    };

    return(
        <div className='posts__wrapper'>
            <h2>My Posts</h2>
            <AddPostForm onSubmit={ onAddPost }/>
            <div className="posts-output pt-3">
                { posts }
            </div>
        </div>
    )
}

const MyPost = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className="post-input">
            <div className='form-floating'>
                <Field component='textarea' name='newPost' placeholder='Add New Post' className='form-control form-control-lg h-25' id='addNewPost' />
                <label htmlFor="addNewPost" className='newPostLabel'>Add New Post</label>
            </div>
            <button className='btn btn-success'>Add Post</button>
        </form>
    )
}

const AddPostForm = reduxForm({form: 'add-post-form'})(MyPost);

export default MyPosts;