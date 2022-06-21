import {instance} from "./instance";
import {ResponseType} from "./ProfileApi";

export const UserAPI = {
    unFollowUser(id: number) {
        return instance.delete<ResponseType>(`follow/${id}`)
    },
    followUser(id: number) {
        return instance.post<ResponseType>(`follow/${id}`, null)
    },

}