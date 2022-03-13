import React, {useState} from 'react';
import s from './Dialogs.module.css'
import {v1} from "uuid";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {
    ActionsTypes,
    DialogsPageType,
    DialogsType,
    UsersType
} from "../../redux/state";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (type: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {
    const [users, setUsers] = useState<Array<UsersType>>(props.state.users)
    const [dialogs, setDialogs] = useState<Array<DialogsType>>(props.state.dialogs)
    const [body, setBody] = useState<string>('')

    const dialogsElements = users.map((t, i) => <DialogItem
        name={t.name}
        id={t.id}
        key={t.id}/>
    )

    const messagesElements = dialogs.map((m, i) => <Message
        message={m.message}
        key={v1()}/>)

    const onclickAddNewBody = () => {
        props.dispatch(updateNewMessageBody(body))
        props.dispatch(sendMessage())
        setDialogs([...props.state.dialogs])
        setBody('')
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <Input title={body}
                               setTitle={setBody}
                               onClickAdd={onclickAddNewBody}/>
                    </div>
                    <div>
                        <Button callback={onclickAddNewBody} name={'add'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
