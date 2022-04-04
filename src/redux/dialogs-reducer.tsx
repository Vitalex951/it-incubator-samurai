import {v1} from "uuid";
import {DialogsType, UsersType} from "./store";

export type DialogsReducerType = ReturnType<typeof sendMessage>

export const sendMessage = (title: string) => {
    return {
        type: 'SEND-MESSAGE', title
    } as const
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    users: Array<UsersType>
    // newMessageBody: string

}

let initialState = {
    dialogs: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you'},
        {id: v1(), message: 'Good'},
        {id: v1(), message: 'thx'}
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
