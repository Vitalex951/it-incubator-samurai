import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import ava from '../../img/avaHeader.png'
import {AuthLoginOut, AuthUser} from "../../redux/reducers/auth-reducer";
import {useDispatch} from "react-redux";
import avchik from '../../img/defaultPhoto.png'

type HeaderPropsType = {
    mainUser: AuthUser
}

const Header = (props: HeaderPropsType) => {
    const dispathc = useDispatch()
    const logOutHandler = () => dispathc(AuthLoginOut())
    return <header className={s.header}>
        <div className={s.wrapper}>

            <img src={ava}/>


            <div className={s.loginBlock}>

                {props.mainUser.isAuth
                    ? <div className={s.loginUser}>
                        <img className={s.icon} src={avchik}/>
                        {props.mainUser.login}
                        <button className={s.logout} onClick={logOutHandler}>Login Out</button>
                    </div>

                    : <NavLink to="/login" className={navData => navData.isActive ? s.active : s.item}>
                        <button>login</button>
                    </NavLink>
                }

            </div>
        </div>
    </header>

};

export default Header;