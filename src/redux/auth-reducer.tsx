import {Dispatch} from "redux"
import {AuthApi} from "../components/api/Api";

export type AuthType = {
    id: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

let initialState1: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: AuthType = initialState1, action: AuthReducerType): AuthType => {
    switch (action.type) {

        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data
            }
        default:
            return state

    }
}

export type AuthReducerType = ReturnType<typeof setUserDataAC>

export const setUserDataAC = (id: number, login: string, email: string, isAuth: boolean) => {
    return {
        type: 'SET_USER_DATA', data: {
            id, login, email, isAuth
        }
    } as const
}
export const AuthUserCreator = () => (dispatch: Dispatch) => {
    AuthApi.auth()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setUserDataAC(id, login, email, true))
            }
        })
}
export const AuthUserRegistrationCreator = (email: string, password: string, rememberMe: boolean = false) => (dispatch: Dispatch) => {
    AuthApi.authRegistration(email, password, rememberMe)
        .then(response => {
            console.log(response)
            if (response.data.resultCode === 0) {
            }
        })
}


