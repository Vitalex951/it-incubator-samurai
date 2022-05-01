import React from 'react';
import s from './Users.module.css'
import {Button} from "../Button/Button";
import {userType} from "./UsersContainer";
import ava from '../../img/personal-user.png'
import {NavLink} from "react-router-dom";
import {UserSearchForm} from "./UsersSearchForm";

type UsersPropsType = {
    users: userType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    addUnFollow: (id: number) => void
    addFollow: (id: number) => void
    setCurrentPage: (el: number) => void
    isFetching: boolean
    followingInProgress: number[]


}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }
    if (props.currentPage > 6) {
        pages = []
        for (let i = props.currentPage - 5; i < props.currentPage + 5; i++) {
            pages.push(i)
        }
    }
    return (
        <div>
            <UserSearchForm/>
            {pages.map((el, i) => {
                const setCurrentPageHandler = () => {
                    props.setCurrentPage(el)
                }
                return <span key={i}
                             onClick={setCurrentPageHandler}
                             className={el === props.currentPage ? s.selectedPage : ''}>{el}</span>
            })}
            {
                props.users.map(el => {
                    const followHandler = () => {
                        props.addFollow(el.id)
                    }
                    const unFollowHandler = () => {
                        props.addUnFollow(el.id)
                    }
                    return <div key={el.id}>
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
        </div>
    );
};




