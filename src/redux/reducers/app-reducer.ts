const initialState = {
    status: false,
    statusUser: false
}

//Reducer
export const appReducer = (state: InitialStateType = initialState, action: AppActionsReducerType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case "APP/SET-USER-STATUS":
            return {...state, statusUser: action.statusUser}
        default:
            return state
    }
}


//AC
export const setAppStatusAC = (status: boolean) => {
    return {
        type: "APP/SET-STATUS", status
    } as const
}
export const setUserStatusAC = (statusUser: boolean) => {
    return {
        type: "APP/SET-USER-STATUS", statusUser
    } as const
}


//Types
type InitialStateType = typeof initialState

export type AppActionsReducerType = ReturnType<typeof setAppStatusAC> | ReturnType<typeof setUserStatusAC>