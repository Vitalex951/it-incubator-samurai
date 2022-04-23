import {Dispatch} from "redux";
import {UserAPI} from "../components/api/Api";


export type usersType = {
    items: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type userType = {
    "name": string
    "id": number
    "uniqueUrlName": any
    "photos": {
        "small": any
        "large": any
    },
    "status": any
    "followed": boolean

}


let initialState: usersType = {
    items: [
        {
            "name": "Fron",
            "id": 23348,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "followed": false,
            "status": null
        },],
    totalUsersCount: 50,
    pageSize: 5,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []


}

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

        default:
            return state
    }
};

type actionsType =
    followACType
    | unfollowACType
    | getStateACType
    | setStateACType
    | toggleisFetchingACType
    | toggleisFollowingProgressAC

type followACType = {
    type: "FOLLOW"
    userID: number
}
export const followAC = (userID: number): followACType => {
    return {
        type: "FOLLOW",
        userID
    }
}

type unfollowACType = {
    type: "UNFOLLOW"
    userID: number
}
export const unfollowAC = (userID: number): unfollowACType => {
    return {
        type: "UNFOLLOW",
        userID
    }
}

type getStateACType = {
    type: "GET-STATE",
    newState: userType[]
}
export const getStateAC = (newState: userType[]): getStateACType => {
    return {
        type: "GET-STATE",
        newState
    }
}

type setStateACType = {
    type: "CHANGE-CURRENT-PAGE"
    currentPage: number
}
export const changeCurrentPageAC = (currentPage: number): setStateACType => {
    return {
        type: "CHANGE-CURRENT-PAGE",
        currentPage
    }
}

type toggleisFetchingACType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}
export const toggleisFetchingAC = (isFetching: boolean): toggleisFetchingACType => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching
    }
}

type toggleisFollowingProgressAC = {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS"
    userID: number
    isFetching: boolean
}
export const toggleisFollowingProgressAC = (userID: number, isFetching: boolean): toggleisFollowingProgressAC => {
    return {
        type: "TOGGLE_IS_FOLLOWING_PROGRESS",
        userID,
        isFetching
    }
}


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleisFetchingAC(true))
    UserAPI.getUsers(currentPage, pageSize)
        .then(response => {
                dispatch(getStateAC(response.items))
                dispatch(toggleisFetchingAC(false))
            }
        )
}

export const changeFollowCreator = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleisFollowingProgressAC(id, true))
    UserAPI.followUser(id)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followAC(id))
            }
            dispatch(toggleisFollowingProgressAC(id, false))

        })
}

export const changeUNFollowCreator = (id: number) => (dispatch: Dispatch) => {
    dispatch(toggleisFollowingProgressAC(id, true))
    UserAPI.unFollowUser(id)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowAC(id))
            }
            dispatch(toggleisFollowingProgressAC(id, false))
        })
}





