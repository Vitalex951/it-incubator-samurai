import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import {dialogsReducer, DialogsReducerType} from "./reducers/dialogs-reducer";
import {ProfileActionType, profileReducer} from "./reducers/Profile-reducer";
import {usersReducer} from "./reducers/users-reducer";
import {authReducer, AuthReducerType} from "./reducers/auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppActionsReducerType, appReducer} from "./reducers/app-reducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

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
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// export type AppActionsType =
//     DialogsReducerType
//     | AuthReducerType
//     | ProfileActionType
//     | AppActionsReducerType

type AppActionsType = Parameters<typeof rootReducer>[1]

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionsType>

export type ThunkType = ThunkAction<void, RootState, unknown, AppActionsType>

export type AppRootReducerType = ReturnType<typeof rootReducer>
