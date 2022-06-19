import {instance} from "./instance";
import {userType} from "../users/UsersContainer";
import {PhotosType, ProfileType} from "../../redux/reducers/Profile-reducer";
import {AxiosResponse} from "axios";

export const profileApi = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance.get<GetResponse>(`users?page=${currentPage}&count=${pageSize}`)
    },
    showUser(id: string) {
        return instance.get<ProfileType>(`profile/${id}`)
    },
    getStatus(userId: string) {
        return instance.get<string>(`/profile/status/${userId}`)
        //<any, AxiosResponse<string>>
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status/`, {status: status})
    },
    changeProfile(profile: SaveProfileType) {
        return instance.put<{ profile: ProfileType }, AxiosResponse<ResponseType>>(`profile/`, profile)
    },
    changePhotoProfile(photo: string | Blob) {
        const formData = new FormData();
        formData.append('image', photo)
        return instance.put<ResponseType<{ photos: PhotosType }>>('profile/photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    },
}


type GetResponse = {
    error: null | string
    items: userType[]
    totalCount: number
}

export type ResponseType<T = {}> = {
    resultCode: number
    messages: string[],
    data: T,
    fieldsErrors?: string[]
}

export type SaveProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }

}