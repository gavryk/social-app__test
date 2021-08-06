import React from "react";
import './Settings.scss'

const Settings = (props) => {
    return (
        <div>
            <h1 className='title pb-2 border-bottom'>Settings</h1>
            <div className="theme-settings">
                <h3>Theme Color: { props.appTheme ? 'Dark' : 'Light' }</h3>
                <div className="form-check form-switch">
                    <input
                        checked={props.appTheme}
                        onChange={props.toggleAppTheme}
                        type="checkbox"
                        className="form-check-input"
                        id="customSwitch1"
                    />
                    <label className="form-check-label" for="customSwitch1">

                    </label>
                </div>
            </div>
        </div>
    )
}

export default Settings;