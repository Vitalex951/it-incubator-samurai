import React, {KeyboardEvent} from 'react';
import {Input} from "../../Input/Input";

type ProfileStatusPropsType = {
    editMode: boolean
    status: string | null
    value: string

    setValue: (status: string) => void
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
            {!props.editMode &&
            <div>
                <span onDoubleClick={onDoubleClickHandler}>{props.status? props.status: 'no status'}</span>
            </div>
            }

            {props.editMode &&
            <div>
                <Input
                    autoFocus={true}
                    value={props.value}
                    setValue={props.setValue}
                    onClickAdd={props.addStatus}
                    onBlur={props.addStatus}
                    // onKey={xxx}
                />
            </div>
            }
        </div>
    );
};
