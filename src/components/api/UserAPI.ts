import {instance} from "./instance";

export const UserAPI = {
    unFollowUser(id: number) {
        return (
            instance.delete(`follow/${id}`)
        )
    },
    followUser(id: number) {
        return (
            instance.post(`follow/${id}`, null)
        )
    },

}