import React from "react";
import './ProfileInfo.scss'
import Loader from "../../Loader/Loader";
import userAvatar from "../../../assets/img/user-avatar.png";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loader/>
    }
    let social = [];
    for( let key in props.profile.contacts) {
        social.push(
            {
                name: key,
                link: props.profile.contacts[key]
            }
        )
    }

    return (
        <div>
            <div className="profile-top-bg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2cGUqGnCYT6DxUTYNd8hqbRLcDCZ9c6TsEw&usqp=CAU" alt=""/>
            </div>
            <div className="profile-info text-center">
                <div className="adm-avatar">
                    <img src={ props.profile.photos.large !== null ? props.profile.photos.large : userAvatar }  alt="adm-avatar"/>
                </div>
                <h1>{ props.profile.fullName }</h1>
                <ProfileStatus status={props.status}/>

                <div className="profile-full-info text-left">
                    <h2>About Me:</h2>
                    <div className="info">
                        <p>{ props.profile.aboutMe }</p>
                        <h3>Contacts:</h3>
                        <ul className='soc-links'>
                            {
                                social.map(contact => {
                                    return contact.link ? <li><a href={ contact.link }>{ contact.name }</a></li> : ''
                                })
                            }
                        </ul>
                        <h3>Looking For A Job:</h3>
                        {
                            props.profile.lookingForAJob ? 'Yes' : 'No'
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;