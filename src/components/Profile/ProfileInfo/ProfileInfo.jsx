import React from "react";
import './ProfileInfo.scss'
import admAvatar  from '../../../img/adm-avatar.jpg'

const ProfileInfo = () => {
    return (
        <div>
            <div className="profile-top-bg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2cGUqGnCYT6DxUTYNd8hqbRLcDCZ9c6TsEw&usqp=CAU" alt=""/>
            </div>
            <div className="profile-info text-center">
                <div className="adm-avatar">
                    <img src={ admAvatar }  alt="adm-avatar"/>
                </div>
                <h1>Oleg Gvozd</h1>
            </div>
        </div>
    )
}

export default ProfileInfo;