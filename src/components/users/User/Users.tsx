import React from 'react';
import {Button} from "../../Button/Button";
import {userType} from "../UsersContainer";
import ava from '../../../img/personal-user.png'
import {NavLink} from "react-router-dom";
import s from './User.module.css';
import {IconButton} from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';


type UsersPropsType = {
    users: userType[]
    pageSize: number
    addUnFollow: (id: number) => void
    addFollow: (id: number) => void
    isFetching: boolean
    followingInProgress: number[]
}

export const Users = (props: UsersPropsType) => {
    console.log(props.users)
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


type UserPropsType = {
    user: userType
    addUnFollow: (id: number) => void
    addFollow: (id: number) => void
    isFetching: boolean
    followingInProgress: number[]

}
const User: React.FC<UserPropsType> = ({user, isFetching, followingInProgress, addUnFollow, addFollow}) => {
    const followHandler = () => {
        addFollow(user.id)
    }
    const unFollowHandler = () => {
        addUnFollow(user.id)
    }
    const disabled = followingInProgress.some(id => id === user.id)

    return <div className={s.containerUser}>
        <div>
            <NavLink to={"/profile/" + user.id}>
                <img
                    className={s.userPhoto}
                    src={user.photos.small ? user.photos.small : ava}/>
            </NavLink>

        </div>
        <div>

            {user.followed ?
                <IconButton aria-label="delete" size="large">
                    <CloseIcon fontSize="medium" color={'info'} onClick={unFollowHandler}/>
                </IconButton>
                : <IconButton aria-label="delete" size="large">
                    <CheckCircleIcon fontSize="medium" color={'info'} onClick={followHandler}/>
                </IconButton>
            }

        </div>
        <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                    </span>
        <span>
                                    <div>{user.status}</div>
                                    <div>{user.followed}</div>
                                    </span>
    </div>
}


