import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import {dialogsReducer, DialogsReducerType} from "./reducers/dialogs-reducer";
import {ProfileActionType, profileReducer} from "./reducers/Profile-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {authReducer, AuthReducerType} from "./reducers/auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {AppActionsReducerType, appReducer} from "./reducers/app-reducer";

const rootReducer = combineReducers({
    dialogs: dialogsReducer,
    profile: profileReducer,
    users: usersReducer,
    auth: authReducer,
    appStatus: appReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
//  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppActionsType =
    DialogsReducerType
    | AuthReducerType
    | ProfileActionType
    | AppActionsReducerType

export type ThunkType = ThunkAction<void, AppRootReducerType, unknown, AppActionsType>

export type AppRootReducerType = ReturnType<typeof rootReducer>
