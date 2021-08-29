import React from "react";
import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ profile, status, updateStatus, isOwner, saveAvatar }) => {

    return(
        <div className='profile__block'>
            <ProfileInfo isOwner={isOwner} saveAvatar={ saveAvatar } profile={ profile } status={ status } updateStatus={ updateStatus }/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;