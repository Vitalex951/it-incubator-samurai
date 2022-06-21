import {AuthApi, securityApi} from "../../components/api/AuthApi";
import {ThunkType} from "../store";
import {setAppStatusAC} from "./app-reducer";
import {handlerServerNetworkError, handleServerAppError} from "../../components/utils/error-utils";
import {valuesFromFormikType} from "../../components/login/LoginFormik/LoginFormik";

const initialState1: AuthType = {
    data: {
        id: null,
        email: null,
        login: null,
        isAuth: false
    },
    messages: '',
    captchaURL: null
}

//Reducer
export const authReducer = (state: AuthType = initialState1, action: AuthReducerType): AuthType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                data: {...action.data},
                messages: action.messages
            }
        case "AUTH/GET-CAPTCHA-URL":
            return {
                ...state, captchaURL: action.captchaURL
            }
        default:
            return state

    }
}


//AC
export const setUserDataAC = (id: number | null, login: string | null, email: string | null, isAuth: boolean, messages: string = '') => {
    return {
        type: 'SET_USER_DATA', data: {
            id, login, email, isAuth
        }, messages
    } as const
}
export const getCaptchaURLAC = (captchaURL: string | null) => {
    return {
        type: 'AUTH/GET-CAPTCHA-URL', captchaURL
    } as const

}


//Thunks
export const AuthUser = (): ThunkType => (dispatch) => {
    dispatch(setAppStatusAC(true))
    AuthApi.authMe()
        .then(res => {
            if (res.data.resultCode === 0) {
                const {id, login, email} = res.data.data
                dispatch(setUserDataAC(id, login, email, true, ''))
            } else {
                handleServerAppError(dispatch, res.data)
            }
        })
        .catch(err => {
            handlerServerNetworkError(dispatch, err.message)
        })
        .finally(() => {
            dispatch(setAppStatusAC(false))
        })
}
export const AuthLogin = (values: valuesFromFormikType, setSubmitting: (isSubmitting: boolean) => void): ThunkType => (dispatch) => {
    setSubmitting(true)
    const {email, password, rememberMe, captchaURL}= values
    AuthApi.login(email, password, rememberMe, captchaURL)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(AuthUser())
                dispatch(getCaptchaURLAC(null))
            } else {
                if (res.data.resultCode === 10) {
                    dispatch(getCaptchaURL())
                }
                dispatch(setUserDataAC(null, null, null, false, res.data.messages[0]))
                handlerServerNetworkError(dispatch, res.data.messages[0])
            }

        })
        .catch(err => {
            handlerServerNetworkError(dispatch, err.message)
        })
        .finally(() => {
            setSubmitting(false)
        })
}
export const AuthLoginOut = (): ThunkType => (dispatch) => {
    AuthApi.logOut()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserDataAC(null, null, null, false))
            } else {
                dispatch(setUserDataAC(null, null, null, false, res.data.messages[0]))
                handleServerAppError(dispatch, res.data)
            }
        })
        .catch(err => {
            handlerServerNetworkError(dispatch, err.message)
        })
}
export const getCaptchaURL = (): ThunkType => (dispatch) => {
    securityApi.getCaptchaURL()
        .then(res => {
            dispatch(getCaptchaURLAC(res.data.url))
        })
        .catch(err => {
            handlerServerNetworkError(dispatch, err.message)
        })
}


//Types
export type AuthReducerType = ReturnType<typeof setUserDataAC> | ReturnType<typeof getCaptchaURLAC>

export type AuthType = {
    data: AuthUser
    messages: string
    captchaURL: null | string
}
export type AuthUser = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}


