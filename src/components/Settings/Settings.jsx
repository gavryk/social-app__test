import React from "react";
import './Settings.scss'

const Settings = (props) => {

    return (
        <div>
            <h1 className='title pb-2 border-bottom'>Settings</h1>
            <div className="theme-settings">
                <h3>Theme Color (dark/light):</h3>
                <div className="custom-control custom-switch">
                    <input
                        checked={props.appTheme}
                        onChange={props.toggleAppTheme}
                        type="checkbox"
                        className="custom-control-input"
                        id="customSwitch1"
                    />
                    <label className="custom-control-label" htmlFor="customSwitch1">

                    </label>
                </div>
            </div>
        </div>
    )
}

export default Settings;