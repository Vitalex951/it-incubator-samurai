import React from "react";
import {LoginFormik, valuesFromFormikType} from "./LoginFormik/LoginFormik";
import {useDispatch, useSelector} from "react-redux";
import {AuthLogin} from "../../redux/reducers/auth-reducer";
import {AppRootReducerType} from "../../redux/store";
import {Navigate} from "react-router-dom";
import s from './Login.module.css'



export const Login = () => {
    const dispatch = useDispatch()
    const logIn = (values: valuesFromFormikType, setSubmitting: (isSubmitting: boolean) => void) => {
        dispatch(AuthLogin(values.email, values.password, values.rememberMe, setSubmitting))
    }
    const email = useSelector<AppRootReducerType, string | null>(state => state.auth.data.email)

    if (email) return <Navigate to="/profile"/>
    return <div className={s.container}>
        <LoginFormik callback={logIn}/>
    </div>
}


