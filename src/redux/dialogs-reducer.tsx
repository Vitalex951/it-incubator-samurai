import {v1} from "uuid";
import {ActionsTypes, DialogsPageType} from "./store";

export type DialogsReducerType = ReturnType<typeof updateNewMessageBody>
    | ReturnType<typeof sendMessage>


export const updateNewMessageBody = (body: string) => {
    return {
        type: 'UPDATE-NEW-TEXT-BODY',
        body
    } as const
}
export const sendMessage = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
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
    newMessageBody: ''
}
export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-TEXT-BODY':
            state.newMessageBody = action.body
            return state
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.dialogs.push({id: v1(), message: body})
            return state
        default: return  state
    }
}
