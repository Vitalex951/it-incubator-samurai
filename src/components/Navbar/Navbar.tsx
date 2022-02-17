import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }> Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }> Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.gold}`}>
                <a> News</a>
            </div>
            <div className={s.item}>
                <a> Music</a>
            </div>
            <div className={s.item}>
                Messages
            </div>
        </nav>
    );
};

export default Navbar;