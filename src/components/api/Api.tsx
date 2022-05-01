import React from 'react';
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "535e058b-7ba5-446a-a913-beec7ec085ca",
    }
})

export const UserAPI = {
    unFollowUser(id: number) {
        return (
            instance.delete(`follow/${id}`)
        )
    },
    followUser(id: number) {
        return (
            instance.post(`follow/${id}`, null)
        )
    },

}

export const ProfileApi = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        );
    },
    showMainUser(id: string) {
        return (
            instance.get(`profile/${id}`)
        )
    },
    getStatus(userId: string) {
        return (
            instance.get(`/profile/status/${userId}`)
        )

    },
    updateStatus(status: string) {
        return (
            instance.put(`profile/status/`, {status})

        )
    }

}

export const AuthApi = {
    auth() {
        return (
            instance.get(`auth/me`)
        )
    },
    authRegistration(email: string, password: string, rememberMe: boolean) {
        return (
            instance.post('auth/login', {email, password, rememberMe})
        )
    }
}





