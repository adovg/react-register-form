import React from 'react';
import './index.scss';


const Nav = () => {
    return (
        <div className="header">
            <nav className="nav-menu">
                <a className="nav__logo"><img src={require("../../images/logo_white_animated.svg")} alt="logo" /></a>
                <ul className="nav__item">
                    <li><i className="far fa-envelope"></i> <a href="support@piastrix.com">support@piastrix.com</a></li>
                    <li></li>
                    <li>English</li>
                    <li>Русский</li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;