import React from "react";
import {Input} from "../../common/FormControls/FormControls";
import {Field, reduxForm} from "redux-form";

const ProfileDataForm = ({ profile }) => {
    return (
        <div className="profile-full-info text-start">
            <AddNewData onSubmit={() => {  }}/>
        </div>
    )
}

const MyProfileData = (props) => {
    return (
        <form onSubmit={ props.handleSubmit } className="post-input">
            <button className='btn btn-success'>Save</button>
            <Field
                component={ Input }
                name='newName'
                placeholder='Change Name'
                className='form-control form-control-lg h-25 mb-3'
                id='changeName' />
            <Field
                component={ Input }
                name='newAbout'
                placeholder='Change About Me'
                className='form-control form-control-lg h-25 mb-3'
                id='changeAbout' />
        </form>
    )
}

const AddNewData = reduxForm({form: 'add-profile-data'})(MyProfileData);

export default ProfileDataForm;