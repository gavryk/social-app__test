import React from "react";
import './Profile.scss'

import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div className='main-content shadow rounded'>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2cGUqGnCYT6DxUTYNd8hqbRLcDCZ9c6TsEw&usqp=CAU" alt=""/>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;