// status === 'loading' показываем крутилку
// status === 'idle' убираем крутилку



const initialState = {
    //крутилка под верхним баннером
    status: false as RequestStatusType

}
export const appReducer = (state: InitialStateType = initialState, action: AppActionsReducerType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
    }
}

//ActionCreates
export const setAppStatusAC = (status: RequestStatusType) => {
    return {
        type: "APP/SET-STATUS", status
    } as const
}


//type
type InitialStateType = typeof initialState

export type RequestStatusType = boolean

export type AppActionsReducerType = SetAppStatusType

type SetAppStatusType = ReturnType<typeof setAppStatusAC>