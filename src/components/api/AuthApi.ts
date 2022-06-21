import React from 'react';
import {instance} from "./instance";
import {ResponseType} from "./ProfileApi";
import {AxiosResponse} from "axios";

export const AuthApi = {
    authMe() {
        return instance.get<ResponseType<AuthRequestType>>(`auth/me`)

    },
    login(email: string, password: string, rememberMe: boolean, captcha: string| null) {
        return instance.post<ResponseType<{userId: string}>>('auth/login', {email, password, rememberMe, captcha})

    },
    logOut() {
        return instance.delete<ResponseType>('auth/login')
    }
}

export const securityApi = {
    getCaptchaURL() {
        return instance.get<any, AxiosResponse<{url: string}>>(`security/get-captcha-url`)
    },
}

type AuthRequestType = {
    id: null | number
    email: null | string
    login: null | string
}








