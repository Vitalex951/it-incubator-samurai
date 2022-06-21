import React from 'react';
import {userType} from "../UsersContainer";
import s from './User.module.css';
import {User} from "./User/User";


type UsersPropsType = {
    users: userType[]
    pageSize: number
    addUnFollow: (id: number) => void
    addFollow: (id: number) => void
    isFetching: boolean
    followingInProgress: number[]
}

export const Users = (props: UsersPropsType) => {
    const user = props.users?.map(el => <User key={el.id}
                                              addFollow={props.addFollow}
                                              user={{...el}}
                                              addUnFollow={props.addUnFollow}
                                              followingInProgress={props.followingInProgress}
                                              isFetching={props.isFetching}/>
    )
    return (
        <div className={s.container}>
            {user}
        </div>
    );
};


