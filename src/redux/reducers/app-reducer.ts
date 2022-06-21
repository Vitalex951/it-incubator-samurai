const initialState = {
    status: false,
    statusUser: false,
    statusError: false,
    error: null as string | null
}

//Reducer
export const appReducer = (state: InitialStateType = initialState, action: AppActionsReducerType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case "APP/SET-USER-STATUS":
            return {...state, statusUser: action.statusUser}
        case "APP/CHANGE-ERROR":
            return {...state, error: action.error}
        case "APP/SET-APP-ERROR-STATUS":
            return {...state, statusError: action.statusError}
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
export const setAppErrorAC = (error: string | null) => {
    return {
        type: "APP/CHANGE-ERROR", error
    } as const
}
export const setAppErrorStatusAC = (statusError: boolean) => {
    return {
        type: "APP/SET-APP-ERROR-STATUS", statusError
    } as const
}

//Types
type InitialStateType = typeof initialState

export type AppActionsReducerType = ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setUserStatusAC>
    | ReturnType<typeof setAppErrorAC>
    | ReturnType<typeof setAppErrorStatusAC>