import {v1} from "uuid";

import {DialogsReducerType} from "./dialogs-reducer";
import {ProfileReducerType} from "./Profile-reducer";



type ScoreType = {
    _state: RootsStateType
    // dispatch: (action: ActionsTypes) => void
}
type RootsStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: any
}
 type ProfilePageType = {
    postData: Array<PostDataType>
    // newPostText: string
}
 type DialogsPageType = {
    dialogs: Array<DialogsType>
    users: Array<UsersType>
    // newMessageBody: string

}
 type PostDataType = {
    id: string
    message: string
    likes: number
}
export type DialogsType = {
    id: string
    message: string
}
export type UsersType = {
    id: string
    name: string
}



let store: ScoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: v1(), message: 'Hi', likes: 3},
                {id: v1(), message: 'How are you', likes: 5},
            ],
        },
        dialogsPage: {
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

        },
        sidebar: {}
    },
    // dispatch(action) {
    //     // this._state.profilePage = profileReducer(this._state.profilePage, action)
    //     // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    //
    //     // if (action.type === 'ADD-POST') {
    //     //     let newPost = {
    //     //         id: v1(),
    //     //         message: this._state.profilePage.newPostText,
    //     //         likes: 0
    //     //     }
    //     //     this._state.profilePage.postData.push(newPost)
    //     //     this._state.profilePage.newPostText = ''
    //     // } else if (action.type === "UPDATE-NEW-POST-TEXT") {
    //     //     this._state.profilePage.newPostText = action.newText
    //     // } else if (action.type === 'UPDATE-NEW-TEXT-BODY') {
    //     //     this._state.dialogsPage.newMessageBody = action.body
    //     // } else if (action.type === 'SEND-MESSAGE') {
    //     //     debugger
    //     //     let body = this._state.dialogsPage.newMessageBody
    //     //     this._state.dialogsPage.newMessageBody = ''
    //     //     this._state.dialogsPage.dialogs.push({id: v1(), message: body})
    // }

}

export default store;
