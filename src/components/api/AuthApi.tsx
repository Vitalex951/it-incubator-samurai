import React from 'react';
import {instance} from "./instance";
import {ResponseType} from "./ProfileApi";

export const AuthApi = {
    authMe() {
        return instance.get<ResponseType<AuthRequestType>>(`auth/me`)

    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<ResponseType<{userId: string}>>('auth/login', {email, password, rememberMe})

    },
    logOut() {
        return instance.delete<ResponseType>('auth/login')
    }
}

type AuthRequestType = {
    id: null | number
    email: null | string
    login: null | string
}








