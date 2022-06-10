import React, {useEffect} from 'react';
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "../../redux/store";
import {AuthUser} from "../../redux/reducers/auth-reducer";

export const HeaderContainer = () => {
    const dispatch = useDispatch()
    const mainUser = useSelector<AppRootReducerType, AuthUser>(state => state.auth.data)
    useEffect(() => {
        dispatch(AuthUser())
    }, [mainUser.isAuth])
    return <Header mainUser={mainUser}/>
};
