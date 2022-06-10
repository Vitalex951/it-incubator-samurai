import React, {useEffect} from 'react';

import {Users} from "./User/Users";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "../../redux/store";
import {changeCurrentPageAC, changeFollowTC, changeUNFollowTC, getUsersTC} from "../../redux/reducers/users-reducer";
import {Preloader} from "../common/Preloader";
import {Navigate} from "react-router-dom";


export type userType = {
    name: string
    id: number
    photos: photosType
    status: null
    followed: boolean
}

type photosType = {
    small: null
    large: null
}

export const UsersContainer = () => {

    const pageSize = useSelector<AppRootReducerType, number>(state => state.users.pageSize)
    const totalUsersCount = useSelector<AppRootReducerType, number>(state => state.users.totalUsersCount)
    const currentPage = useSelector<AppRootReducerType, number>(state => state.users.currentPage)
    const auth = useSelector<AppRootReducerType, boolean>(state => state.auth.data.isAuth)
    const users = useSelector<AppRootReducerType, userType[]>(state => {
        return state.users.items
    })
    const isFetching = useSelector<AppRootReducerType, boolean>(state => state.users.isFetching)
    const followingInProgress = useSelector<AppRootReducerType, number[]>(state => state.users.followingInProgress)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize))
    }, [currentPage])

    const addUnFollow = (id: number) => {
        dispatch(changeUNFollowTC(id))

    }
    const addFollow = (id: number) => {
        dispatch(changeFollowTC(id))

    }
    const setCurrentPage = (currentPage: number) => {
        // dispatch(getUsersThunkCreator(currentPage, pageSize))
        dispatch(changeCurrentPageAC(currentPage))
    }

    if (!auth) return <Navigate to="/login"/>
    return (
        <div>
            {isFetching ? <Preloader/> : null}
            <Users currentPage={currentPage}
                   users={users}
                   pageSize={pageSize}
                   totalUsersCount={totalUsersCount}
                   addUnFollow={addUnFollow}
                   addFollow={addFollow}
                   setCurrentPage={setCurrentPage}
                   isFetching={isFetching}
                   followingInProgress={followingInProgress}

            />
        </div>
    );
};

