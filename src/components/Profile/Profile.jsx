import React from "react";
import './Profile.scss'

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return(
        <div className='profile__block'>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;