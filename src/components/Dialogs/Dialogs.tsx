import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'
import {v1} from "uuid";

type DialogItemType = {
    users: Array<users>
}
type users = {
    name: string
    id: number
}


type MessageItemType = {
    message: string
}

const DialogItem = (props: users) => {
    let path = '/dialogs/' + props.id
    console.log(path)
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageItemType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}


const Dialogs = () => {
    let users = [
        {name: 'Vasya'},
        {name: 'Vika'},
        {name: 'Ola'},
        {name: 'Vital'},
        {name: 'Stepa'},
        {name: 'Stas'}
    ]
    let messages = [
        {message: 'Hi'},
        {message: 'How are you'},
        {message: 'Good'},
        {message: 'thx'}
    ]
    const newUsers = users.map((t, i) => {
        return <DialogItem name={t.name} id={i+1} key={v1()}/>
    })

    const newMessages = messages.map((m, i) => <Message message={m.message} key={v1()}/>
    )
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {newUsers}
            </div>

            <div className={s.messages}>
                {newMessages}
            </div>
        </div>
    );
};

export default Dialogs;