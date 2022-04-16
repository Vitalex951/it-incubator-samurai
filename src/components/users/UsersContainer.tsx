import React, {useEffect} from 'react';

import {Users} from "./Users";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "../store/store";
import {
    followAC,
    getStateAC,
    setStateAC,
    toggleisFetchingAC,
    toggleisFollowingProgressAC,
    unfollowAC
} from "../../redux/users-reducer";
import {Preloader} from "../common/Preloader";
import {UserAPI} from "../api/Api";


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

    const users = useSelector<AppRootReducerType, userType[]>(state => {
        return state.users.items
    })
    const isFetching = useSelector<AppRootReducerType, boolean>(state => state.users.isFetching)
    const followingInProgress = useSelector<AppRootReducerType, number[]>(state => state.users.followingInProgress)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(toggleisFetchingAC(true))

        UserAPI.getUsers(currentPage, pageSize)
            .then(response => {
                    dispatch(getStateAC(response.items))
                    dispatch(toggleisFetchingAC(false))
                }
            )
    }, [currentPage])

    const addUnFollow = (id: number) => {
        dispatch(toggleisFollowingProgressAC(id,true))
        UserAPI.unFollowUser(id)
            .then(response => {

                console.log(response)
                if (response.data.resultCode === 0) {
                    dispatch(unfollowAC(id))
                }
                dispatch(toggleisFollowingProgressAC(id,false))
            })

    }
    const addFollow = (id: number) => {
        dispatch(toggleisFollowingProgressAC(id,true))
        UserAPI.followUser(id)
            .then(response => {
                console.log(response)
                if (response.data.resultCode === 0) {
                    dispatch(followAC(id))
                }
                dispatch(toggleisFollowingProgressAC(id,false))

            })

    }
    const setCurrentPage = (el: number) => {
        dispatch(setStateAC(el))
    }


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

