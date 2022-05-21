import React, {KeyboardEvent} from 'react';
import {Input} from "../../Input/Input";
import {StatusType} from "../../../redux/Profile-reducer";

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
    //test
    // const xxx = (e: KeyboardEvent<HTMLInputElement>) => {
    //     console.log(e.key)
    // }


    return (
        <div>

            {props.isStatus === "mainUser"
            &&
            (props.editMode ? <div>
                    <Input
                        autoFocus={true}
                        value={props.valueMainUser}
                        setValue={props.setValueMainUser}
                        onClickAdd={props.addStatus}
                        onBlur={props.addStatus}
                        // onKey={xxx}
                    />
                </div>
                : <div>
                    <span
                        onDoubleClick={onDoubleClickHandler}>{props.valueMainUser ? props.valueMainUser : 'no status'}</span>
                </div>)}


            {props.isStatus === "user"
            && <span>{props.valueUser ? props.valueUser : 'no status'}</span>}

        </div>
    );
};
