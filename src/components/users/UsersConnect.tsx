import React from 'react';
import {useSelector} from "react-redux";
import {AppRootReducerType} from "../store/state/state";
import {usersType} from "../../redux/users-reducer";
import {Users} from "./Users";

export const UsersConnect = () => {
    const users = useSelector<AppRootReducerType, usersType>(state => state.users)
    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

