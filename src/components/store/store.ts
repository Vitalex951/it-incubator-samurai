import {combineReducers, createStore, applyMiddleware} from "redux";
import {dialogsReducer, DialogsReducerType} from "../../redux/dialogs-reducer";
import {ProfileActionType, profileReducer} from "../../redux/Profile-reducer";
import {usersReducer} from "../../redux/users-reducer";
import {authReducer, AuthReducerType} from "../../redux/auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {appReducer, setAppStatusACType} from "../../redux/app-reducer";


const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    users: usersReducer,
    auth: authReducer,
    appStatus: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppActionsType =DialogsReducerType | AuthReducerType | ProfileActionType | setAppStatusACType

export type ThunkType = ThunkAction<void, AppRootReducerType, unknown, AppActionsType>

export type AppRootReducerType = ReturnType<typeof rootReducer>
