import {v1} from "uuid";
import {ActionsTypes, PostDataType, ProfilePageType} from "./store";

export type ProfileReducerType = ReturnType<typeof addPostActionCreator>


export const addPostActionCreator = (title: string) => {
    return {
        type: "ADD-POST",
        title
    } as const
}
// export const changeNewTextAction = (newText: string) => {
//     return {
//         type: "UPDATE-NEW-POST-TEXT",
//         newText
//     } as const
// }

let initialState = [
    {id: v1(), message: 'Hi', likes: 3},
    {id: v1(), message: 'How are you', likes: 5},
]


export const profileReducer = (state: Array<PostDataType> = initialState, action: ActionsTypes): Array<PostDataType> => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: v1(),
                message: action.title,
                likes: 0
            }
            return [...state, newPost]

        default:
            return state
    }
};
