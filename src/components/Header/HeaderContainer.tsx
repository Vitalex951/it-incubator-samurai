import React, {useEffect} from 'react';
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "../store/store";
import {AuthType, AuthUserCreator} from "../../redux/auth-reducer";

export const HeaderContainer = () => {
    const dispatch = useDispatch()
    let mainUser = useSelector<AppRootReducerType, AuthType>(state => state.auth)
    useEffect(() => {
        dispatch(AuthUserCreator())
    }, [mainUser.isAuth])

    return <Header mainUser={mainUser}/>

};
