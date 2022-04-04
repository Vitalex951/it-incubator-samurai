import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "../../../redux/dialogs-reducer";
import {profileReducer} from "../../../redux/Profile-reducer";
import {usersReducer} from "../../../redux/users-reducer";

const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    users: usersReducer
})

export const store = createStore(rootReducer)

export type AppRootReducerType = ReturnType<typeof rootReducer>
