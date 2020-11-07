import React from "react";
import './Profile.scss'

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return(
        <div className='profile__block'>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={ props.profilePage.newPostText }
                dispatch={ props.dispatch }
            />
        </div>
    )
}

export default Profile;