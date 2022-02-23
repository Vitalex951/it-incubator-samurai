import React from 'react';
import s from './Dialogs.module.css'

type MessageItemType = {
    message: string
}

const Message = (props: MessageItemType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export default Message;