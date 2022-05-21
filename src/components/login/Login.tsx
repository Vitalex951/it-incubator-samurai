import React from "react";
import {LoginFormik, valuesFromFormikType} from "./LoginFormik";
import {useDispatch, useSelector} from "react-redux";
import {AuthLogin} from "../../redux/auth-reducer";
import {AppRootReducerType} from "../store/store";
import {Navigate} from "react-router-dom";


export const Login = () => {
    const dispatch = useDispatch()
    const logIn = (values:valuesFromFormikType, setSubmitting: (isSubmitting: boolean) => void) => {
        dispatch(AuthLogin(values.email, values.password, values.rememberMe, setSubmitting))
    }
    const email = useSelector<AppRootReducerType, string | null>(state => state.auth.data.email)

    if (email) return <Navigate to="/profile"/>
    return <div>
        <h1>
            Login
        </h1>
        <LoginFormik callback={logIn}/>

    </div>
}


