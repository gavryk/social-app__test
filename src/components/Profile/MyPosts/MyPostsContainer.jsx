import React from "react";
import { addPostActionCreator, updatePostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChanges = (text) => {
        props.store.dispatch(updatePostActionCreator(text));
    };

    return(
        <MyPosts
            updateNewPostText={ onPostChanges }
            addPost={ addPost }
            posts={ state.profilePage.posts }
            newPostText={ state.profilePage.newPostText }
        />
    )
}

export default MyPostContainer;