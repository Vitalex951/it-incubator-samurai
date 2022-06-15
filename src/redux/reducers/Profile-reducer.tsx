import {Dispatch} from "redux";
import {v1} from "uuid";
import {profileApi} from "../../components/api/ProfileApi";
import {setAppStatusAC} from "./app-reducer";


export const initialState: StateType = {
    postData: [
        {id: v1(), message: 'Hi', likes: 3},
        {id: v1(), message: 'How are you?', likes: 5},
        {id: v1(), message: 'Are you free today?', likes: 5},
    ],
    profile: {
        aboutMe: "",
        contacts: {
            facebook: "",
            website: null,
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "",
        fullName: "",
        userId: 2,
        photos: {
            small: "",
            large: ""
        }
    },
    statusMainUser: '',
    statusUser: '',
    isStatus: "mainUser",
    loaderStatus: false
}
//Reducer
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
        case "PROFILE/CHANGE-LOADER-STATUS":
            return {...state, loaderStatus: action.status}
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
export const changeLoaderStatusAC = (status: boolean) => {
    return {
        type: "PROFILE/CHANGE-LOADER-STATUS",
        status
    } as const
}


//Thunk
export const getStatusMainUser = (userID: string) => (dispatch: Dispatch) => {
    profileApi.getStatus(userID).then(res => {
        dispatch(setStatusMainUserAC(res.data))
    })
}
export const getStatusUser = (userID: string) => (dispatch: Dispatch) => {
    profileApi.getStatus(userID).then(res => {
        dispatch(setStatusUserAC(res.data))
    })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatusMainUserAC(status))
            }
        })
}
export const showProfileUserTC = (paramsID: string) => (dispatch: Dispatch) => {
    dispatch(changeLoaderStatusAC(true))
    profileApi.showUser(paramsID)
        .then(res => {
                dispatch(setUserProfileAC(res.data))
            }
        ).finally(() => {
        dispatch(changeLoaderStatusAC(false))
    })
}


//Types
export type ProfileActionType = ProfileReducerACType
    | setUserProfileACType
    | setStatusMainUserACType
    | setStatusUserACType
    | ChangeIsStatusACType
    | ReturnType<typeof changeLoaderStatusAC>

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
    loaderStatus: boolean
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
