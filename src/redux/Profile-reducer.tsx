import {v1} from "uuid";


type StateType = {
    postData: Array<PostDataType>
    profile: ProfileType | null
}

export type PostDataType = {
    id: string
    message: string
    likes: number
}
export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
type ProfileContactsType = {
    facebook: string,
    website: any
    vk: string
    twitter: string
    instagram: string
    youtube: any
    github: string
    mainLink: any
}


export let initialState = {
    postData: [
        {id: v1(), message: 'Hi', likes: 3},
        {id: v1(), message: 'How are you', likes: 5},
    ],
    profile: {
        "aboutMe": "я круто чувак 1001%",
        "contacts": {
            "facebook": "facebook.com",
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": "github.com",
            "mainLink": null
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": "не ищу, а дурачусь",
        "fullName": "Vitali",
        "userId": 2,
        "photos": {
            "small": "",
            "large": "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"
        }
    }
}


export const profileReducer = (state: StateType = initialState, action: actionType): StateType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: v1(),
                message: action.title,
                likes: 0
            }
            return {...state , postData: [newPost,...state.postData ]}
        case "SET-PROFILE":
            return {...state, profile: {...action.profile}}
        default:
            return state
    }
};


type actionType = ProfileReducerACType | setUserProfileACType

export type ProfileReducerACType = ReturnType<typeof addPostAC>
export const addPostAC = (title: string) => {
    return {
        type: "ADD-POST",
        title
    } as const
}


export type setUserProfileACType = ReturnType<typeof setUserProfileAC>
export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: "SET-PROFILE",
        profile
    } as const
}