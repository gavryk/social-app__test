import React from "react";
import style from './Login.module.scss'

const Login = () => {
    return (
        <div>
            <h1 className='title pb-2 border-bottom'>Login</h1>
            <form className='mt-5'>
                <div className="form-floating mb-3">
                    <input type="text" className='form-control' id="exampleInputLogin1" placeholder='Login'/>
                    <label for="exampleInputLogin1" className={style.label}>Login</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                    <label for="exampleInputEmail1" className={style.label}>Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    <label for="exampleInputPassword1" className={style.label}>Password</label>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login;