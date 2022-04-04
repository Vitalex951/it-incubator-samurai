import {v1} from "uuid";


export type usersType = {
    users: Array<userType>
}

type userType = {
    id: string
    fullName: string
    status: string
    followed: boolean
    locations: {
        city: string
        country: string
    }
}

let initialState: usersType = {
    users: [
        {
            id: v1(),
            followed: true,
            fullName: 'Vital',
            status: 'I am a boss',
            locations: {city: 'Bobruisk', country: 'Belarus'}
        },
        {
            id: v1(),
            followed: true,
            fullName: 'Misha',
            status: 'I am a bigboss',
            locations: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: v1(),
            followed: false,
            fullName: 'Vika',
            status: 'I am a girl',
            locations: {city: 'Odessa', country: 'Urkaine'}
        },
        {
            id: v1(),
            followed: false,
            fullName: 'Tolya',
            status: 'I am a boy',
            locations: {city: 'Kiev', country: 'Ukraine'}
        },
    ]
}

export const usersReducer = (state: usersType = initialState, action: actionsType): usersType => {

    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID? {...el, followed: true}: el)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(el => el.id === action.userID? {...el, followed: false}: el)
            }
        }
        default:
            return state
    }
};


type actionsType = followACType | unfollowACType

type followACType = {
    type: "FOLLOW"
    userID: string
}
export const followAC = (userID:string): followACType => {
    return {
        type: "FOLLOW",
        userID
    }
}


type unfollowACType = {
    type: "UNFOLLOW"
    userID: string
}
export const unfollowAC = (userID:string):unfollowACType => {
    return {
        type: "UNFOLLOW",
        userID
    }
}



