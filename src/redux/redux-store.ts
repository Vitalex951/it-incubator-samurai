import {combineReducers, createStore } from "redux";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer
})

let store = createStore(reducers)
export  type ReduxStoreType = typeof store

export default store;