import React from "react";
import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return(
        <div className='profile__block'>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;