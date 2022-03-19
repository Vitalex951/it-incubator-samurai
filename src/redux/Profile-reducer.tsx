import {v1} from "uuid";
import {ActionsTypes, ProfilePageType} from "./store";

export type ProfileReducerType =  ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewTextAction>


export const addPostActionCreator = () => {
    return {
        type: "ADD-POST",
    } as const
}
export const changeNewTextAction = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText
    } as const
}

let initialState = {
        postData: [
            {id: v1(), message: 'Hi', likes: 3},
            {id: v1(), message: 'How are you', likes: 5},
        ],
        newPostText: ''
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    debugger
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likes: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
};
