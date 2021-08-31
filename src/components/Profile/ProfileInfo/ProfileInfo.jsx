import React, {useState} from "react";
import './ProfileInfo.scss'
import userAvatar from "../../../assets/img/user-avatar.png";
import ProfileStatus from './ProfileStatus'
import Loader from "../../common/Loader/Loader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera} from "@fortawesome/free-solid-svg-icons";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({saveAvatar, ...props}) => {
    const [editProfileMode, setEditProfileMode] = useState(false);

    let default_img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2cGUqGnCYT6DxUTYNd8hqbRLcDCZ9c6TsEw&usqp=CAU'
    if (!props.profile) {
        return <Loader/>
    }

    let onChangeAvatar = (e) => {
        if (e.target.files.length) {
            saveAvatar(e.target.files[0]);
        }
    }

    const editModeHandler = () => {
        setEditProfileMode(!editProfileMode);
    }

    return (
        <div>
            <div className="profile-top-bg" style={{backgroundImage: `url(${default_img})`} }>

            </div>
            <div className="profile-info text-center">
                <div className="adm-avatar">
                    <img src={ props.profile.photos.large !== null ? props.profile.photos.large : userAvatar }  alt="adm-avatar"/>
                    {
                        props.isOwner &&
                        <div className='upload-photo'>
                            <label htmlFor="changePhoto" className='d-flex justify-content-center align-items-center'>
                                <FontAwesomeIcon icon={faCamera} />
                            </label>
                            <input
                                type='file'
                                name='newAvatar'
                                placeholder='Add Avatar'
                                className='form-control'
                                id='changePhoto'
                                onChange={ onChangeAvatar }
                            />
                        </div>
                    }
                </div>
                <h1>{ props.profile.fullName }</h1>

                <ProfileStatus status={props.status} updateStatus={ props.updateStatus } />

                { editProfileMode ? <ProfileDataForm profile={ props.profile } /> : <ProfileData editModeHandler={ editModeHandler } isOwner={ props.isOwner } profile={ props.profile }/> }
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, editModeHandler }) => {
    return (
        <div className="profile-full-info text-start">
            <h2>About Me:</h2>
            <div className="info">
                <p>{ profile.aboutMe }</p>
                <h3>Contacts:</h3>
                <ul className='soc-links'>
                    {
                        Object.keys(profile.contacts).map(key => {
                            return <SocialLinks key={ key } title={ key } value={ profile.contacts[key] }/>
                        })
                    }
                </ul>
                <h3>Looking For A Job:</h3>
                {
                    profile.lookingForAJob ? 'Yes' : 'No'
                }
                <p>{ profile.lookingForAJobDescription }</p>
            </div>
            { isOwner && <button className='button' onClick={ editModeHandler }>Edit</button> }
        </div>
    )
}

const SocialLinks = ({title, value}) => {
    return (
        <div>
            <b>{ title }:</b><span>{ value }</span>
        </div>
    )
}

export default ProfileInfo;