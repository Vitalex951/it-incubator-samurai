import React, {useEffect} from 'react';
import Header from "./Header";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "../store/store";
import {AuthType, setUserDataAC} from "../../redux/auth-reducer";

export const HeaderContainer = () => {
    const dispatch = useDispatch()
    let mainUser = useSelector<AppRootReducerType, AuthType>(state => state.auth)
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                   dispatch(setUserDataAC(id, login, email, true))
                }
            })
    }, [mainUser.isAuth])

    return <Header mainUser={mainUser}/>

};
