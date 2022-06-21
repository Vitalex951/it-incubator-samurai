import {userType} from "../../UsersContainer";
import React from "react";
import s from "../User.module.css";
import {NavLink} from "react-router-dom";
import ava from "../../../../img/personal-user.png";
import {IconButton} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

type UserPropsType = {
    user: userType
    addUnFollow: (id: number) => void
    addFollow: (id: number) => void
    isFetching: boolean
    followingInProgress: number[]

}
export const User: React.FC<UserPropsType> = ({user, isFetching, followingInProgress, addUnFollow, addFollow}) => {
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
                <IconButton aria-label="delete" size="large" onClick={unFollowHandler} disabled={disabled}>
                    <CloseIcon fontSize="medium" color={'info'}/>
                </IconButton>
                : <IconButton aria-label="delete" size="large" onClick={followHandler} disabled={disabled}>
                    <CheckCircleIcon fontSize="medium" color={'info'}/>
                </IconButton>
            }
        </div>

        <span>
            <div>{user.name}</div>
            <div>{user.status}</div></span>

        <span>
            <div>{user.followed}</div>
        </span>
    </div>
}