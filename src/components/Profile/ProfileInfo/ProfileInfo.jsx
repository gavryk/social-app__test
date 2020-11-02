import React from "react";
import './ProfileInfo.scss'

const ProfileInfo = () => {
    return (
        <div>
            <div className="profile-top-bg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2cGUqGnCYT6DxUTYNd8hqbRLcDCZ9c6TsEw&usqp=CAU" alt=""/>
            </div>
            <div className="profile-avatar">
                <h1>Avatar</h1>
            </div>
        </div>
    )
}

export default ProfileInfo;