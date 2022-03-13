import {v1} from "uuid";
import {ProfilePageType} from "./state";

export type ProfileReducerType =  ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewTextAction>


export const addPostActionCreator = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const changeNewTextAction = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText
    } as const
}

export const profileReducer = (state: ProfilePageType, action: any) => {
    // console.log(action)
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