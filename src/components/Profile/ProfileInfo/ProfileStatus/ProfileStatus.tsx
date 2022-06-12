import React from 'react';
import {Input} from "../../../Input/Input";
import {StatusType} from "../../../../redux/reducers/Profile-reducer";
import s from './ProfileStatus.module.css'

type ProfileStatusPropsType = {
    editMode: boolean
    valueMainUser: string
    isStatus: StatusType
    valueUser: string | null

    setValueMainUser: (status: string) => void
    onDoubleClick: (editMode: boolean) => void
    addStatus: () => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {
    const onDoubleClickHandler = () => {
        props.onDoubleClick(true)
    }


    return (
        <div>

            {props.isStatus === "mainUser"
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
                        onDoubleClick={onDoubleClickHandler}>{props.valueMainUser ? props.valueMainUser : 'set status'}</span>
                </div>)}


            {props.isStatus === "user"
            && <span>{props.valueUser ? props.valueUser : 'no status'}</span>}

        </div>
    );
};
