import React from "react";
import {CheckBox, Input, TextArea} from "../../common/FormControls/FormControls";
import {Field, reduxForm} from "redux-form";

const DataForm = (props) => {
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
            <Field
                component={ CheckBox }
                type='checkbox'
                name='newLookingForAJob'
                placeholder='Looking For A Job'
                className='form-check-input'
                id='changeLookingJob' />
            <Field
                component={ TextArea }
                name='newSkills'
                placeholder='Change Skills'
                className='form-control form-control-lg h-25 mb-3'
                id='changeSkills' />
        </form>
    )
}

const ProfileDataForm = reduxForm({form: 'add-profile-data'})(DataForm);


export default ProfileDataForm;