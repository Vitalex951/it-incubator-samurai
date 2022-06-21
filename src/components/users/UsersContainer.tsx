import React, {useEffect} from 'react';

import {Users} from "./User/Users";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType, useAppSelector} from "../../redux/store";
import {changeFollowTC, changeUNFollowTC, getUsersTC} from "../../redux/reducers/users-reducer";
import {Navigate} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import Paginator from "./Paginator/Paginator";
import s from './UsersContainer.module.css'
import {Preloader} from "../common/Preloader";



export type userType = {
    name: string
    id: number
    photos: photosType
    status: null
    followed: boolean
}

export type photosType = {
    small: null
    large: null
}

export const UsersContainer = () => {
    const pageSize = useSelector<AppRootReducerType, number>(state => state.users.pageSize)
    const currentPage = useSelector<AppRootReducerType, number>(state => state.users.currentPage)
    const auth = useSelector<AppRootReducerType, boolean>(state => state.auth.data.isAuth)
    const users = useSelector<AppRootReducerType, userType[]>(state => {
        return state.users.items
    })
    const statusUser = useAppSelector(state => state.app.statusUser)
    const isFetching = useSelector<AppRootReducerType, boolean>(state => state.users.isFetching)
    const followingInProgress = useSelector<AppRootReducerType, number[]>(state => state.users.followingInProgress)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersTC(1, 10))
    }, [])

    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize))
    }, [currentPage])

    const addUnFollow = (id: number) => {
        dispatch(changeUNFollowTC(id))

    }
    const addFollow = (id: number) => {
        dispatch(changeFollowTC(id))

    }



    if (!auth) return <Navigate to="/login"/>

    return <div className={s.container}>
        <div style={{margin: '10px 0 0 0'}}><Paginator/></div>
        {statusUser
            ? <div className={s.circular}><CircularProgress/></div>
            : <Users
                users={users}
                pageSize={pageSize}
                addUnFollow={addUnFollow}
                addFollow={addFollow}
                isFetching={isFetching}
                followingInProgress={followingInProgress}

            />}
    </div>
};

