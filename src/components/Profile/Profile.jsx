import React from "react";
import './Profile.scss'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ profile, status, updateStatus, isOwner, saveAvatar, saveProfile }) => {

    return(
        <div className='profile__block'>
            <ProfileInfo saveProfile={saveProfile} isOwner={isOwner} saveAvatar={ saveAvatar } profile={ profile } status={ status } updateStatus={ updateStatus }/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;