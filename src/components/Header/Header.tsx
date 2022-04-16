import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import ava from '../../img/saab.jpg'
import {AuthType} from "../../redux/auth-reducer";

type HeaderPropsType = {
    mainUser: AuthType
}

const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <img src={ava}/>

        <div className={s.loginBlock}>

            {props.mainUser.isAuth
                ? props.mainUser.login :
                <NavLink to="/login" className={navData => navData.isActive ? s.active : s.item}>
                    Login
                </NavLink>
            }

        </div>
    </header>
};

export default Header;