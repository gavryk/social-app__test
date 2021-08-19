import React from "react";
import './Settings.scss'

const Settings = (props) => {
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

            <h2>Change Profile Avatar</h2>
            <div className="change-avatar-block">
                <label htmlFor='formFile' className="form-label text-white">Add New Avatar</label>
                <input
                    type='file'
                    name='newAvatar'
                    placeholder='Add Avatar'
                    className='form-control'
                    id='formFile'
                />
            </div>
        </div>
    )
}

export default Settings;