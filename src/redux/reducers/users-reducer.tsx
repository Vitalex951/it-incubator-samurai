import {Dispatch} from "redux";
import {UserAPI} from "../../components/api/UserAPI";
import {profileApi} from "../../components/api/ProfileApi";
import {setUserStatusAC} from "./app-reducer";
import {userType} from "../../components/users/UsersContainer";
import {handlerServerNetworkError, handleServerAppError} from "../../components/utils/error-utils";

const initialState: usersType = {
    items: [
        {
            "name": "Fron",
            "id": 23348,
            "photos": {
                "small": null,
                "large": null
            },
            "followed": false,
            "status": null
        },],
    totalUsersCount: 50,
    pageSize: 9,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

//Reducer
export const usersReducer = (state: usersType = initialState, action: actionsType): usersType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, items: state.items.map(el => el.id === action.userID ? {...el, followed: true} : el)}
        }
        case "UNFOLLOW": {
            return {...state, items: state.items.map(el => el.id === action.userID ? {...el, followed: false} : el)}
        }
        case "GET-STATE": {
            return {...state, items: [...action.newState]}
        }
        case   "CHANGE-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "TOGGLE_IS_FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        case "TOGGLE_IS_FOLLOWING_PROGRESS": {
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userID] : state.followingInProgress.filter(el => el !== action.userID)
            }
        }
        case "CHANGE-USERS-COUNT":
            return {...state, totalUsersCount: action.usersCount}

        default:
            return state
    }
};


//AC
export const followAC = (userID: number): followACType => {
    return {
        type: "FOLLOW",
        userID
    }
}
export const unfollowAC = (userID: number): unfollowACType => {
    return {
        type: "UNFOLLOW",
        userID
    }
}
export const getStateAC = (newState: userType[]): getStateACType => {
    return {
        type: "GET-STATE",
        newState
    }
}
export const changeCurrentPageAC = (currentPage: number): setStateACType => {
    return {
        type: "CHANGE-CURRENT-PAGE",
        currentPage
    }
}
export const toggleisFetchingAC = (isFetching: boolean): toggleisFetchingACType => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    }
}
export const toggleisFollowingProgressAC = (userID: number, isFetching: boolean): toggleisFollowingProgressAC => {
    return {
        type: "TOGGLE_IS_FOLLOWING_PROGRESS",
        userID,
        isFetching
    }
}
export const changeUsersCountAC = (usersCount: number) => {
    return {
        type: "CHANGE-USERS-COUNT",
        usersCount
    } as const
}


//Thunks
export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleisFetchingAC(true))
    dispatch(setUserStatusAC(true))
    profileApi.getUsers(currentPage, pageSize)
        .then(res => {
                dispatch(getStateAC(res.data.items))
                dispatch(toggleisFetchingAC(false))
                dispatch(changeUsersCountAC(res.data.totalCount))
            }

        )
        .catch(err => {
            handlerServerNetworkError(dispatch, err.message)
        })
        .finally(() => {
            dispatch(setUserStatusAC(false))
        })
}
export const changeFollowTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleisFollowingProgressAC(id, true))
    UserAPI.followUser(id)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(followAC(id))
            } else {
                handleServerAppError(dispatch, res.data)
            }
            dispatch(toggleisFollowingProgressAC(id, false))

        })
        .catch(err => {
            handlerServerNetworkError(dispatch, err.message)
        })
}
export const changeUNFollowTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleisFollowingProgressAC(id, true))
    UserAPI.unFollowUser(id)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(unfollowAC(id))
            } else {
                handleServerAppError(dispatch, res.data)
            }
            dispatch(toggleisFollowingProgressAC(id, false))
        })
        .catch(err => {
            handlerServerNetworkError(dispatch, err.message)
        })
}

//Types
export type usersType = {
    items: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

// type userType = {
//     "name": string
//     "id": number
//     "uniqueUrlName": any
//     "photos": {
//         "small": any
//         "large": any
//     },
//     "status": any
//     "followed": boolean
// }

type actionsType =
    followACType
    | unfollowACType
    | getStateACType
    | setStateACType
    | toggleisFetchingACType
    | toggleisFollowingProgressAC
    | ReturnType<typeof changeUsersCountAC>

type followACType = {
    type: "FOLLOW"
    userID: number
}
type unfollowACType = {
    type: "UNFOLLOW"
    userID: number
}
type getStateACType = {
    type: "GET-STATE",
    newState: userType[]
}
type setStateACType = {
    type: "CHANGE-CURRENT-PAGE"
    currentPage: number
}
type toggleisFetchingACType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}
type toggleisFollowingProgressAC = {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS"
    userID: number
    isFetching: boolean
}









