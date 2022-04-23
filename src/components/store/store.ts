import {combineReducers, createStore, applyMiddleware} from "redux";
import {dialogsReducer} from "../../redux/dialogs-reducer";
import {profileReducer} from "../../redux/Profile-reducer";
import {usersReducer} from "../../redux/users-reducer";
import {authReducer} from "../../redux/auth-reducer";
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    users: usersReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootReducerType = ReturnType<typeof rootReducer>
