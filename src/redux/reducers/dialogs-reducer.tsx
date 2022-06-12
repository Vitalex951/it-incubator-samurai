import {v1} from "uuid";
import {DialogsType, UsersType} from "../../components/trash/store";

const initialState = {
    dialogs: [
        {id: v1(), message: 'Hi, I am really busy'},

    ],
    users: [
        {id: v1(), name: 'Vasya'},
        {id: v1(), name: 'Vika'},
        {id: v1(), name: 'Ola'},
        {id: v1(), name: 'Vital'},
        {id: v1(), name: 'Stepa'},
        {id: v1(), name: 'Stas'}
    ],
}

//Reducer
export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsReducerType) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            return {
                ...state,
                dialogs: [
                    ...state.dialogs,
                    {id: v1(), message: action.title}
                ]
            }
        default:
            return state
    }
}


//AC
export const sendMessage = (title: string) => {
    return {
        type: 'SEND-MESSAGE', title
    } as const
}


//Thunks


//Types
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    users: Array<UsersType>

}
export type DialogsReducerType = ReturnType<typeof sendMessage>