let rerenderEntireTree = () => {
    console.log('State change')
}

export type RootsStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
type ProfilePageType ={
    postData: Array<PostDataType>
    newPostText: string
}
type DialogsPageType ={
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


let state: RootsStateType = {
    profilePage: {
        postData: [
            {message: 'Hi', likes: 3},
            {message: 'How are you', likes: 5},
        ],
        newPostText: 'It Kamasutra'
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
}



export default state

