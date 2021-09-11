import React from "react";
import {CheckBox, Input, TextArea} from "../../common/FormControls/FormControls";
import {Field, reduxForm} from "redux-form";
import style from "../../Login/Login.module.scss";

const DataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={ handleSubmit } className="post-input text-start">
            <Field
                component={ Input }
                name='fullName'
                placeholder='Change Name'
                className='form-control form-control-lg h-25 mb-3'
                id='changeName' />
            <Field
                component={ Input }
                name='aboutMe'
                placeholder='Change About Me'
                className='form-control form-control-lg h-25 mb-3'
                id='changeAbout' />
            <Field
                component={ CheckBox }
                type='checkbox'
                name='lookingForAJob'
                placeholder='Looking For A Job'
                className='form-check-input'
                id='changeLookingJob' />
            <Field
                component={ TextArea }
                name='lookingForAJobDescription'
                placeholder='Change Skills'
                className='form-control form-control-lg h-25 mb-3'
                id='changeSkills' />
            <ul className='soc-links'>
                {
                    Object.keys(profile.contacts).map((key, index) => {
                        return <div className='contacts' key={key}>
                            <b>{ key }: { <Field component={ Input }
                                                 name={'contacts.' + key}
                                                 placeholder={key}
                                                 className='form-control form-control-lg h-25 mb-3'
                                                 id={`contactsField-${ index++ }`}/> }</b></div>
                    })
                }
            </ul>

            <button className='btn btn-success'>Save</button>
            { error && <h4 className={`${style.dangerMsg} text-danger p-1 mt-3 mb-3`}> { error }</h4> }
        </form>
    )
}

const ProfileDataForm = reduxForm({form: 'add-profile-data'})(DataForm);


export default ProfileDataForm;