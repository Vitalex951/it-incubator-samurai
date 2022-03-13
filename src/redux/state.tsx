import {v1} from "uuid";


export type ScoreType = {
    _state: RootsStateType
    dispatch: (action: AddPostActionType | UpdateNewTextType) => void
}
type RootsStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}
type ProfilePageType = {
    postData: Array<PostDataType>
    newPostText: string
}
type DialogsPageType = {
    dialogs: Array<DialogsType>
    users: Array<UsersType>
}
export type PostDataType = {
    message: string
    likes: number
}
type DialogsType = {
    message: string
}
type UsersType = {
    name: string
}
type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewTextType = {
    type: 'UPDATE-NEW_POST_TEXT'
    newText: string
}
export type ActionsType = AddPostActionType | UpdateNewTextType

let store: ScoreType = {
    _state: {
        profilePage: {
            postData: [
                {message: 'Hi', likes: 3},
                {message: 'How are you', likes: 5},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {message: 'Hi'},
                {message: 'How are you'},
                {message: 'Good'},
                {message: 'thx'}
            ],
            users: [
                {name: 'Vasya'},
                {name: 'Vika'},
                {name: 'Ola'},
                {name: 'Vital'},
                {name: 'Stepa'},
                {name: 'Stas'}
            ],

        }
    },
    // rerenderEntireTree () {
    //     console.log('State change')
    // },
    // addPost() {
    //     let newPost = {
    //         id: v1(),
    //         message: this._state.profilePage.newPostText,
    //         likes: 0
    //     }
    //     this._state.profilePage.postData.push(newPost)
    //     // this._state.profilePage.newPostText = ''
    //     // this.rerenderEntireTree(this._state)
    //
    // },
    // getState() {
    //     return this._state
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     // this.rerenderEntireTree(this._state)
    // },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
        } else if (action.type === 'UPDATE-NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText
        }
    }
}

export default store;

