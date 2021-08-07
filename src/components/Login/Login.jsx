import React from "react";
import style from './Login.module.scss'
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <div className={`${style.formWrapper} d-flex justify-content-center align-items-center`}>
            <form onSubmit={ props.handleSubmit } className='w-50'>
                <div className="form-floating mb-3">
                    <Field component={'input'} type={"text"} name={'login'} className='form-control' id="exampleInputLogin1" placeholder='Login'/>
                    <label htmlFor="exampleInputLogin1" className={style.label}>Login</label>
                </div>
                <div className="form-floating mb-3">
                    <Field component={'input'} type={"password"} name={'password'} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    <label htmlFor="exampleInputPassword1" className={style.label}>Password</label>
                </div>
                <div className="mb-3 form-check">
                    <Field component={'input'} type={"checkbox"} name={'remember'} className="form-check-input" id="exampleCheck1"/>
                    <label htmlFor="exampleCheck1">Remember Me</label>
                </div>
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
        console.log(formData);
    }

    return (
        <div>
            <h1 className='title pb-2 border-bottom'>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;