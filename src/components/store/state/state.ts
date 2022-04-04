import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "../../../redux/dialogs-reducer";
import {profileReducer} from "../../../redux/Profile-reducer";

const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer
})

export const store = createStore(rootReducer)

export type AppRootReducerType = ReturnType<typeof rootReducer>
