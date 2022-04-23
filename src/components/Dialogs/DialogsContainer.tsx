import React, {useState} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import {DialogsType, UsersType} from "../../redux/store";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "../store/store";
import {sendMessage} from "../../redux/dialogs-reducer";
import Message from "./Message/Message";
import {v1} from "uuid";
import {Login} from "../login/Login";
import {Navigate, Route} from "react-router-dom";

type DialogsPropsType = {
    // state: DialogsPageType
    // dispatch: (type: ActionsTypes) => void
}

const DialogsContainer = () => {


    const users = useSelector<AppRootReducerType, Array<UsersType>>(state => state.dialogs.users)
    const [title, setTitle] = useState<string>('')
    const dialogs = useSelector<AppRootReducerType, Array<DialogsType>>(state => state.dialogs.dialogs)
    const dispatch = useDispatch()
    const auth = useSelector<AppRootReducerType, boolean>(state => state.auth.isAuth)

    const dialogsElements = users.map((t, i) => <DialogItem
        name={t.name}
        id={t.id}
        key={t.id}/>
    )

    const messagesElements = dialogs.map((m, i) => <Message
        message={m.message}
        key={v1()}/>)

    const onclickAddNewBody = () => {
        dispatch(sendMessage(title))
        setTitle('')
    }

    if (!auth) return <Navigate to="/login"/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <Input title={title}
                               setTitle={setTitle}
                               onClickAdd={onclickAddNewBody}/>
                    </div>
                    <div>
                        <Button disabled={false} callback={onclickAddNewBody} name={'add'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DialogsContainer;
