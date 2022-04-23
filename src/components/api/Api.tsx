import React from 'react';
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "df4660f4-df49-4be1-a3a7-25f1400eafca",
    }
})

export const UserAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        );
    },
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
    auth() {
        return (
            instance.get(`auth/me`)
        )
    },
    showMainUser(id: string) {
        return (
            instance.get(`profile/${id}`)
        )
    }

}




