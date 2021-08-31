import React from "react";
import {Input} from "../../common/FormControls/FormControls";

const ProfileDataForm = ({ profile }) => {
    return (
        <div className="profile-full-info text-start">
            <form>
                <button className='btn btn-success'>Save</button>
            </form>
        </div>
    )
}

export default ProfileDataForm;