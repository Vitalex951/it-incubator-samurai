import React from 'react';
import {Button} from "../../Button/Button";
import {userType} from "../UsersContainer";
import ava from '../../../img/personal-user.png'
import {NavLink} from "react-router-dom";
import s from './User.module.css';



type UsersPropsType = {
    users: userType[]
    pageSize: number
    addUnFollow: (id: number) => void
    addFollow: (id: number) => void
    isFetching: boolean
    followingInProgress: number[]
}

export const Users = (props: UsersPropsType) => {
    return (
        <div className={s.container}>
            <User users={props.users}
                  pageSize={props.pageSize}
                  addFollow={props.addFollow}
                  addUnFollow={props.addUnFollow}
                  followingInProgress={props.followingInProgress}
                  isFetching={props.isFetching}/>

        </div>
    );
};


type UserPropsType = {
    users: userType[]
    pageSize: number
    addUnFollow: (id: number) => void
    addFollow: (id: number) => void
    isFetching: boolean
    followingInProgress: number[]
}
const User = (props: UserPropsType) => {

    return <> {
        props.users.map(el => {
            const followHandler = () => {
                props.addFollow(el.id)
            }
            const unFollowHandler = () => {
                props.addUnFollow(el.id)
            }
            return <div key={el.id} className={s.containerUser}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + el.id}>
                            <img
                                className={s.userPhoto}
                                src={el.photos.small ? el.photos.small : ava}/>
                            </NavLink>

                        </div>
                        <div>

                                {el.followed ?
                                    <Button
                                        disabled={props.followingInProgress.some(id => id === el.id)}
                                        name={'Unfollow'}
                                        callback={unFollowHandler}/>
                                    : <Button
                                        disabled={props.followingInProgress.some(id => id === el.id)}
                                        name={'Follow'}
                                        callback={followHandler}/>}

                                    </div>
                                    </span>
                <span>
                                    <span>
                                    <div>{el.name}</div>
                                    <div>{el.status}</div>
                                    </span>
                                    <span>
                                    <div>{el.status}</div>
                                    <div>{el.followed}</div>
                                    </span>
                                    </span>
            </div>
        })
    }
    </>
}


