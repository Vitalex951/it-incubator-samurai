import {v1} from "uuid";

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

export  const dialogsReducer = (state: any, action: any) => {
    console.log(state)
    switch (action.type) {
        case 'UPDATE-NEW-TEXT-BODY':
            state.newMessageBody = action.body
            return state
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.dialogs.push({id: v1(), message: body})
            return state
    }
}
