import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'

type users = {
    name: string
    id: string
}

const DialogItem = (props: users) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;