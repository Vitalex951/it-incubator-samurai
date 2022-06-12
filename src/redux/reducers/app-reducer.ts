const initialState = {
    status: false as RequestStatusType,
    statusUser: false as RequestStatusType
}

//Reducer
export const appReducer = (state: InitialStateType = initialState, action: AppActionsReducerType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case "APP/SET-USER-STATUS":
            return {...state, statusUser: action.status}
        default:
            return state
    }
}


//AC
export const setAppStatusAC = (status: RequestStatusType) => {
    return {
        type: "APP/SET-STATUS", status
    } as const
}
export const setUserStatusAC = (status: RequestStatusType) => {
    return {
        type: "APP/SET-USER-STATUS", status
    } as const
}


//Types
type InitialStateType = typeof initialState

export type RequestStatusType = boolean

export type AppActionsReducerType = ReturnType<typeof setAppStatusAC> |  ReturnType<typeof setUserStatusAC>