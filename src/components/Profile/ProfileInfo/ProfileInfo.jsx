import React, {useState} from "react";
import './ProfileInfo.scss'
import userAvatar from "../../../assets/img/user-avatar.png";
import ProfileStatus from './ProfileStatus'
import Loader from "../../common/Loader/Loader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCamera, faPen} from "@fortawesome/free-solid-svg-icons";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({saveAvatar, saveProfile, ...props}) => {
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

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditProfileMode(!editProfileMode);
        })
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

                { editProfileMode
                    ? <ProfileDataForm initialValues={ props.profile }
                                     profile={props.profile}
                                     onSubmit={onSubmit} />
                    : <ProfileData editModeHandler={ editModeHandler } isOwner={ props.isOwner } profile={ props.profile }/> }
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner, editModeHandler }) => {
    return (
        <div className="profile-full-info text-start">
            { isOwner
            && <div className='edit-btn text-center pe-3'>
                <button className='btn btn-secondary w-15 lh-1' onClick={ editModeHandler }>
                    <FontAwesomeIcon icon={faPen} />
                    Edit Profile
                </button>
            </div>
            }
            <div className="info">
                <div className="info-item mb-3">
                    <h3>{ profile.aboutMe !== null ? 'About Me:' : ''}</h3>
                    <p className='mb-0'>{ profile.aboutMe }</p>
                </div>
                <div className="info-item mb-3">
                    <h3>{ profile.lookingForAJob !== null ? 'Looking For A Job:' : ''}</h3>
                    {
                        profile.lookingForAJob ? 'Yes' : 'No'
                    }
                </div>
                <div className="info-item mb-3">
                    <h3>{ profile.lookingForAJobDescription !== null ? 'Skills:' : ''}</h3>
                    <p className='mb-0'>{ profile.lookingForAJobDescription }</p>
                </div>
                <div className="info-item mb-3">
                    <h3>{ Object.keys(profile.contacts).every((key) => !profile.contacts[key]) ? '' : 'Contacts:'}</h3>
                    <ul className='soc-links'>
                        {
                            Object.keys(profile.contacts).map(key => {
                                return key ? <SocialLinks key={ key } title={ key } value={ profile.contacts[key] }/> : ''
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

const SocialLinks = ({title, value}) => {
    return (
        <div>
            <b>{ value ? `${ title }: ` : '' }</b> <a href={ value }>{ value ? value : '' }</a>
        </div>
    )
}

export default ProfileInfo;