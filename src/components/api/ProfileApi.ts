import {instance} from "./instance";

export const profileApi = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        );
    },
    showUser(id: string) {
        return (
            instance.get(`profile/${id}`)
        )
    },
    getStatus(userId: string) {
        return (
            instance.get(`/profile/status/${userId}`)
        )

    },
    updateStatus(status: string) {
        return (
            instance.put(`profile/status/`, {status: status})

        )
    }

}