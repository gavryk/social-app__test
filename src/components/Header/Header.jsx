import logo from "../../img/logo.png";
import "./Header.scss";
import React from "react";

const Header = () => {
    return(
        <header className='navbar mb-3 p-3 col-12 shadow rounded'>
            <a href="/" className='logo'>
                <img src={ logo } alt=""/>
            </a>
        </header>
    )
}
export default Header;