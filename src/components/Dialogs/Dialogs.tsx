import React from 'react';
import s from './Dialogs.module.css'
import {v1} from "uuid";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

type DialogsType = {
    users: Array<UserTypeProps>
    messages: Array<MessagesTypeProps>
}
export type UserTypeProps = {
    name: string
}
 export  type MessagesTypeProps = {
    message: string
}


const Dialogs: React.FC<DialogsType> = ({users, messages}) => {


    const dialogsElements = users.map((t, i) => <DialogItem name={t.name} id={i + 1} key={v1()}/>)

    const messagesElements = messages.map((m, i) => <Message message={m.message} key={v1()}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;


//19-14