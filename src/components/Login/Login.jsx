import React from "react";
import style from './Login.module.scss'
import {Field, reduxForm} from "redux-form";
import {CheckBox, Input} from "../FormControls/FormControls";
import {requiredField} from "../../utils/validators/validator";


const LoginForm = (props) => {
    return (
        <div className={`${style.formWrapper} d-flex justify-content-center align-items-center`}>
            <form onSubmit={ props.handleSubmit } className='w-50'>
                <Field validate={[requiredField]} component={ Input } type="text" name='login' className='form-control mb-3' id="exampleInputLogin1" placeholder='Login'/>
                <Field validate={[requiredField]} component={ Input } type="password" name='password' className="form-control mb-3" id="exampleInputPassword1" placeholder="Password"/>
                <Field component={ CheckBox } type={"checkbox"} name={'remember'} className="form-check-input" id="exampleCheck1" placeholder="Remember Me"/>
                <div className='text-center'>
                    <button type="submit" className="btn btn-success text-center">Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {

    }

    return (
        <div>
            <h1 className='title pb-2 border-bottom'>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;