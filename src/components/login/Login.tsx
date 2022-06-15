import React from "react";
import {LoginFormik, valuesFromFormikType} from "./LoginFormik/LoginFormik";
import {useDispatch} from "react-redux";
import {AuthLogin} from "../../redux/reducers/auth-reducer";
import {useAppSelector} from "../../redux/store";
import {Navigate} from "react-router-dom";


export const Login = () => {
    const dispatch = useDispatch()
    const logIn = (values: valuesFromFormikType, setSubmitting: (isSubmitting: boolean) => void) => {
        dispatch(AuthLogin(values.email, values.password, values.rememberMe, setSubmitting))
    }
    const email = useAppSelector(state => state.auth.data.email)

    if (email) return <Navigate to="/profile"/>
    return  <LoginFormik callback={logIn}/>

}


