import React, {useEffect} from 'react';
import {Header} from "./Header";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../redux/store";
import {AuthUser} from "../../redux/reducers/auth-reducer";

export const HeaderContainer = () => {
    const dispatch = useDispatch()
    const mainUser = useAppSelector(state => state.auth.data)

    useEffect(() => {
        dispatch(AuthUser())
    }, [mainUser.isAuth])

    return <Header mainUser={mainUser}/>
};
