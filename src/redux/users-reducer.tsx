import {v1} from "uuid";


export type usersType = {
    items: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
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
            "status": null,
            "followed": false
        }, ],
    pageSize: 5,
    totalUsersCount: 25,
    currentPage: 1

}


export const usersReducer = (state: usersType = initialState, action: actionsType): usersType => {
    console.log(action)

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
        case "SET-STATE": {
            return  {...state, currentPage: action.currentPage}
        }
        default:
           return state
    }
};


type actionsType = followACType | unfollowACType | getStateACType | setStateACType

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
    type: "SET-STATE"
    currentPage: number
}
export const setStateAC = (currentPage: number): setStateACType => {
    return {
        type: "SET-STATE",
        currentPage
    }
}



