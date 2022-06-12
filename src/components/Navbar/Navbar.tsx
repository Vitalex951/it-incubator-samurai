import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {

    return (

        <div className={s.wrapper}>
            <div className={s.box}>
                <nav className={s.nav}>
                    <NavLink to="/profile"
                             className={navData => navData.isActive ? s.active : s.item}> Profile</NavLink>

                    <NavLink to="/dialogs"
                             className={navData => navData.isActive ? s.active : s.item}> <span
                        className={s.spanText}>Messages</span></NavLink>

                    <div className={`${s.item} ${s.gold}`}>
                        <a> News</a>
                    </div>
                    <div className={s.item}>
                        <a> Music</a>
                    </div>
                    <NavLink to="/users"
                             className={navData => navData.isActive ? s.active : s.item}> Users</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;