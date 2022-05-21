import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import ava from '../../img/saab.jpg'
import {AuthLoginOut, AuthUser} from "../../redux/auth-reducer";
import {useDispatch} from "react-redux";

type HeaderPropsType = {
    mainUser: AuthUser
}

const Header = (props: HeaderPropsType) => {
    const dispathc = useDispatch()
    const logOutHandler = () => dispathc(AuthLoginOut())
    return <header className={s.header}>
        <img src={ava}/>

        <div className={s.loginBlock}>

            {props.mainUser.isAuth
                ? <div>
                    {props.mainUser.login}
                    <button onClick={logOutHandler}>Login Out</button>
                </div>

                : <NavLink to="/login" className={navData => navData.isActive ? s.active : s.item}>
                    Login
                </NavLink>
            }

        </div>
    </header>
};

export default Header;