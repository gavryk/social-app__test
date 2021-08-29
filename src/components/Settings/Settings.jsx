import React, {useState} from "react";
import style from './Settings.module.scss'

const Settings = ({ saveAvatar, ...props }) => {

    const onUserPhoto = (e) => {
       if (e.target.files.length) {
           saveAvatar(e.target.files[0]);
       }
    }

    return (
        <div>
            <h1 className='title pb-2 border-bottom'>Settings</h1>
            <div className="theme-settings mb-3">
                <h3>Theme Color: { props.appTheme ? 'Dark' : 'Light' }</h3>
                <div className="form-check form-switch">
                    <input
                        checked={props.appTheme}
                        onChange={props.toggleAppTheme}
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch1"
                    />
                    <label className="form-check-label" htmlFor="customSwitch1">

                    </label>
                </div>
            </div>

            <h2>Profile Settings</h2>
            <div className={style.changeAvatarBlock}>
                <label htmlFor='formFile' className="form-label text-white">Add New Avatar</label>
                <input
                    type='file'
                    name='newAvatar'
                    placeholder='Add Avatar'
                    className='form-control'
                    id='formFile'
                    onChange={ onUserPhoto }
                />
            </div>
        </div>
    )
}

export default Settings;