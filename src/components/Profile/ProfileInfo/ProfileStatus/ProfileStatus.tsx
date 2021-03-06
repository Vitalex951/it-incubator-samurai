import React from 'react';
import {Input} from "../../../Input/Input";
import {StatusType} from "../../../../redux/reducers/Profile-reducer";
import s from './ProfileStatus.module.css'
import {useAppSelector} from "../../../../redux/store";

type ProfileStatusPropsType = {
    editMode: boolean
    valueMainUser: string
    isUser: StatusType
    valueUser: string | null

    setValueMainUser: (status: string) => void
    onDoubleClick: (editMode: boolean) => void
    addStatus: () => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {
    const statusValue = useAppSelector(state => state.profile.statusMainUser)

    const onDoubleClickHandler = () => {
        props.onDoubleClick(true)
    }

    return <div>
        {props.isUser === "mainUser"
            &&
            (props.editMode ? <div className={s.status}>
                    <Input
                        className={s.status}
                        autoFocus={true}
                        value={props.valueMainUser}
                        setValue={props.setValueMainUser}
                        onClickAdd={props.addStatus}
                        onBlur={props.addStatus}
                    />
                </div>
                : <div>
                    <span
                        onDoubleClick={onDoubleClickHandler}>{statusValue ? statusValue : 'set status'}</span>
                </div>)
        }

        {props.isUser === "user"
            && <span>{props.valueUser ? props.valueUser : 'no status'}</span>}
    </div>
};
