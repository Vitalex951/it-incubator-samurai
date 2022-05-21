import {Dispatch} from "redux";
import {v1} from "uuid";
import {ProfileApi, UserAPI} from "../components/api/Api";


export const initialState: StateType = {
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
    },
    statusMainUser: '',
    statusUser: '',
    isStatus: "mainUser"

}

export const profileReducer = (state: StateType = initialState, action: ProfileActionType): StateType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: v1(),
                message: action.title,
                likes: 0
            }
            return {...state, postData: [newPost, ...state.postData]}
        case "SET-PROFILE":
            return {...state, profile: {...action.profile}}
        case "SET-STATUS-MAIN-USER":
            return {...state, statusMainUser: action.status}
        case "SET-STATUS-USER":
            return {...state, statusUser: action.status}
        case "CHANGE-STATUS":
            return {...state, isStatus: action.isStatus}
        default:
            return state
    }
};

//AC
export const addPostAC = (title: string) => {
    return {
        type: "ADD-POST",
        title
    } as const
}

export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: "SET-PROFILE",
        profile
    } as const
}
export const showProfileUser = (paramsID: string | undefined) => (dispatch: Dispatch) => {
    if (paramsID) {
        ProfileApi.showMainUser(paramsID)
            .then(response => {
                    dispatch(setUserProfileAC(response.data))
                }
            )
    } else {
        if (initialState.profile !== null)
            dispatch(setUserProfileAC(initialState.profile))
    }
}
export const setStatusMainUserAC = (status: string) => {
    return {
        type: "SET-STATUS-MAIN-USER",
        status: status
    } as const
}
export const setStatusUserAC = (status: string) => {
    return {
        type: "SET-STATUS-USER",
        status: status
    } as const
}
export const changeIsStatusAC = (isStatus: StatusType) => {
    return {
        type: "CHANGE-STATUS",
        isStatus
    } as const
}


//Thunk
export const getStatusMainUser = (userID: string) => (dispatch: Dispatch) => {
    ProfileApi.getStatus(userID).then(res => {
        dispatch(setStatusMainUserAC(res.data))
    })
}
export const getStatusUser = (userID: string) => (dispatch: Dispatch) => {
    ProfileApi.getStatus(userID).then(res => {
        dispatch(setStatusUserAC(res.data))
    })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    ProfileApi.updateStatus(status).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setStatusMainUserAC(status))
        }
    })
}

//Type

export type ProfileActionType = ProfileReducerACType
    | setUserProfileACType
    | setStatusMainUserACType
    | setStatusUserACType
    | ChangeIsStatusACType

export type setStatusMainUserACType = ReturnType<typeof setStatusMainUserAC>
export type setStatusUserACType = ReturnType<typeof setStatusUserAC>
export type setUserProfileACType = ReturnType<typeof setUserProfileAC>
export type ProfileReducerACType = ReturnType<typeof addPostAC>
export type ChangeIsStatusACType = ReturnType<typeof changeIsStatusAC>


export type StateType = {
    postData: Array<PostDataType>
    profile: ProfileType | null
    statusMainUser: null | string
    statusUser: null | string
    isStatus: StatusType
}

export type StatusType = 'user' | 'mainUser'

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
