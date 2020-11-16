import logo from '../../assets/img/logo.png'
import "./Header.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return(
        <header className='navbar mb-3 p-3 col-12 shadow rounded'>
            <a href="/" className='logo'>
                <img src={ logo } alt=""/>
            </a>
            <div className="login-block">
                { props.isAuth
                    ? <h5 className='m-0 p-0'>{ props.login }</h5>
                    : <NavLink to='/login'><button className='btn btn-login'>Login</button></NavLink>
                }
            </div>
        </header>
    )
}
export default Header;