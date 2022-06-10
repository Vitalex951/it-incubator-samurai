const initialState = {
    status: false as RequestStatusType
}

//Reducer
export const appReducer = (state: InitialStateType = initialState, action: AppActionsReducerType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
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


//Types
type InitialStateType = typeof initialState

export type RequestStatusType = boolean


type SetAppStatusType = ReturnType<typeof setAppStatusAC>
export type AppActionsReducerType = SetAppStatusType