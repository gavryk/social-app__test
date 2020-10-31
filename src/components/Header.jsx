import logo from "../img/logo.png";
import React from "react";

const Header = () => {
    return(
        <header className='navbar navbar-light bg-light mb-3 col-12 shadow rounded'>
            <a href="/" className='logo navbar-brand'>
                <img src={logo} alt=""/>
            </a>
        </header>
    )
}
export default Header;