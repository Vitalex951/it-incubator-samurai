import React, {ChangeEvent, useState} from "react";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import s from './Dialogs.module.css'


type AddMessageFormPropsType = {
    callback: (values: messageType) => void
}

export type messageType = {
    message: string
}
export const AddMessageForm = (props: AddMessageFormPropsType) => {
    const [value, setValue] = useState<string>('')
    const sendMessage = () => {
        props.callback({message: value})
        setValue('')
    }
    const changeValue = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <div className={s.addMessage}>
        <TextField onChange={changeValue} value={value} id="outlined-basic" label="Send message..." variant="outlined"/>
        <Button onClick={sendMessage}>Send</Button>
    </div>
}
