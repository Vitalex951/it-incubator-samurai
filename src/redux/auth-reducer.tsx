import {AuthApi} from "../components/api/Api";
import {ThunkType} from "../components/store/store";
import {setAppStatusAC} from "./app-reducer";


export type AuthType = {
    data: AuthUser
    messages: string
}
export type AuthUser = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState1: AuthType = {
    data: {
        id: null,
        email: null,
        login: null,
        isAuth: false
    },
    messages: ''

}

export const authReducer = (state: AuthType = initialState1, action: AuthReducerType): AuthType => {
    switch (action.type) {

        case 'SET_USER_DATA':
            return {
                ...state,
                data: {...action.data},
                messages: action.messages
            }
        default:
            return state

    }
}

export type AuthReducerType = ReturnType<typeof setUserDataAC>

export const setUserDataAC = (id: number | null, login: string | null, email: string | null, isAuth: boolean, messages: string = '') => {
    return {
        type: 'SET_USER_DATA', data: {
            id, login, email, isAuth
        }, messages
    } as const
}


//thunk
export const AuthUser = (): ThunkType => (dispatch) => {
    dispatch(setAppStatusAC(true))
    AuthApi.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                const {id, login, email} = response.data.data
                dispatch(setUserDataAC(id, login, email, true, ''))
            }
        })
        .finally(() => {
            dispatch(setAppStatusAC(false))
        })
}
export const AuthLogin = (email: string, password: string, rememberMe: boolean = false, setSubmitting: (isSubmitting: boolean) => void): ThunkType => (dispatch) => {
    setSubmitting(true)
    AuthApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(AuthUser())
            } else {
                dispatch(setUserDataAC(null, null, null, false, response.data.messages[0]))
            }
        }).finally(() => {
        setSubmitting(false)
    })
}
export const AuthLoginOut = (): ThunkType => (dispatch) => {
    AuthApi.logOut()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAC(null, null, null, false))
            } else {
                dispatch(setUserDataAC(null, null, null, false, response.data.messages[0]))
            }
        })
}

