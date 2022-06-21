import {Dispatch} from "redux";
import {v1} from "uuid";
import {profileApi, SaveProfileType} from "../../components/api/ProfileApi";
import {valuesFromProfileEditType} from "../../components/Profile/ProfileEdit/ProfileEdit";
import {handlerServerNetworkError, handleServerAppError} from "../../components/utils/error-utils";


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
    isUser: "mainUser",
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
            return {...state, isUser: action.isStatus}
        case "PROFILE/CHANGE-LOADER-STATUS":
            return {...state, loaderStatus: action.status}
        case "PROFILE/UPDATE-PROFILE-PHOTO":
            return {...state, profile: {...state.profile, photos: action.photo}}
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
export const updateProfilePhotoAC = (photo: PhotosType) => {
    return {
        type: "PROFILE/UPDATE-PROFILE-PHOTO",
        photo
    } as const
}


//Thunk
export const getStatusMainUser = (userID: string) => (dispatch: Dispatch) => {
    profileApi.getStatus(userID)
        .then(res => {
            dispatch(setStatusMainUserAC(res.data))
        }).catch(err => {
        handlerServerNetworkError(dispatch, err.message)
    })
}
export const getStatusUser = (userID: string) => (dispatch: Dispatch) => {
    profileApi.getStatus(userID)
        .then(res => {
            dispatch(setStatusUserAC(res.data))
        })
        .catch(err => {
            handlerServerNetworkError(dispatch, err.message)
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setStatusMainUserAC(status))
            } else {
                handleServerAppError(dispatch, res.data)
            }
        })
        .catch(err => {
            handlerServerNetworkError(dispatch, err.message)
        })
}
export const showProfileUserTC = (paramsID: string) => (dispatch: Dispatch) => {
    dispatch(changeLoaderStatusAC(true))
    profileApi.showUser(paramsID)
        .then(res => {
                dispatch(setUserProfileAC(res.data))
            }
        )
        .catch(err => {
            handlerServerNetworkError(dispatch, err.message)
        })
        .finally(() => {
            dispatch(changeLoaderStatusAC(false))
        })
}
export const changeProfilePhotoTC = (photo: string | Blob) => (dispatch: Dispatch) => {
    dispatch(changeLoaderStatusAC(true))
    profileApi.changePhotoProfile(photo)
        .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(updateProfilePhotoAC(res.data.data.photos))
                } else {
                    handleServerAppError(dispatch, res.data)
                }
            }
        )
        .catch(err => {
            handlerServerNetworkError(dispatch, err.message)
        })
        .finally(() => {
            dispatch(changeLoaderStatusAC(false))
        })
}
export const changeProfileTC = (fullname: string, userId: number, obj: valuesFromProfileEditType) => (dispatch: any) => {
    dispatch(changeLoaderStatusAC(true))
    const {twitter, github, vk, facebook, instagram, website, mainLink, youtube, lookingForAJob, aboutMe} = obj
    const profile: SaveProfileType = {
        userId: userId,
        lookingForAJob: lookingForAJob,
        lookingForAJobDescription: 'React',
        fullName: fullname,
        aboutMe: aboutMe,
        contacts: {
            github: github ? github : null,
            twitter: twitter ? twitter : null,
            youtube: youtube ? youtube : null,
            instagram: instagram ? instagram : null,
            vk: vk ? vk : null,
            facebook: facebook ? facebook : null,
            website: website ? website : null,
            mainLink: mainLink ? mainLink : null,
        }
    }
    profileApi.changeProfile(profile)
        .then(res => {

                if (res.data.resultCode === 0) {
                    dispatch(showProfileUserTC(userId.toString()))
                } else {
                    handlerServerNetworkError(dispatch, res.data.messages[0])
                }
            }
        ).catch(err => {
        handlerServerNetworkError(dispatch, err.message)
    })
        .finally(() => {
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
    | ReturnType<typeof updateProfilePhotoAC>

export type setStatusMainUserACType = ReturnType<typeof setStatusMainUserAC>
export type setStatusUserACType = ReturnType<typeof setStatusUserAC>
export type setUserProfileACType = ReturnType<typeof setUserProfileAC>
export type ProfileReducerACType = ReturnType<typeof addPostAC>
export type ChangeIsStatusACType = ReturnType<typeof changeIsStatusAC>

export type StateType = {
    postData: Array<PostDataType>
    profile: ProfileType
    statusMainUser: null | string
    statusUser: null | string
    isUser: StatusType
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
    photos: PhotosType
}
export type PhotosType = {
    small: string | null
    large: string | null
}
type ProfileContactsType = {
    facebook: string | null,
    website: string | null,
    vk: string | null,
    twitter: string | null,
    instagram: string | null,
    youtube: string | null,
    github: string | null,
    mainLink: string | null,
}

