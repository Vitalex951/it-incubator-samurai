import {Dispatch} from "redux";
import {setAppErrorAC} from "../../redux/reducers/app-reducer";
import {ResponseType} from "../api/ProfileApi";


export const handlerServerNetworkError = (dispatch: Dispatch, message: string) => {
    dispatch(setAppErrorAC(message))
}

export const handleServerAppError = <T>(dispatch: Dispatch, data: ResponseType<T>) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some error occurred'))
    }
}