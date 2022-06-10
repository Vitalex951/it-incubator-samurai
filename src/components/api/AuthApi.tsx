import React from 'react';
import {instance} from "./instance";

export const AuthApi = {
    authMe() {
        return (
            instance.get(`auth/me`)
        )
    },
    login(email: string, password: string, rememberMe: boolean) {
        return (
            instance.post('auth/login', {email, password, rememberMe})
        )
    },
    logOut() {
        return (
            instance.delete('auth/login')
        )
    }
}





