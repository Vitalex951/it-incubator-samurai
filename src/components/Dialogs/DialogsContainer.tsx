import React, {useEffect} from 'react';
import s from './Dialogs.module.css'
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../redux/reducers/dialogs-reducer";
import {Navigate} from "react-router-dom";
import {AddMessageForm, messageType} from "./Message/AddMessageForm";
import {AppRootReducerType, useAppSelector} from "../../redux/store";
import ava from '../../img/personal-user.png'
import scr from '../../img/scarlett-johansson.jpg'

export  const DialogsContainer = () => {
    const dispatch = useDispatch()
    const auth = useSelector<AppRootReducerType, boolean>(state => state.auth.data.isAuth)
    const message = useAppSelector(state => state.dialogs.dialogs)

    const onclickAddNewBody = (values: messageType) => {

        dispatch(sendMessage(values.message))
    }

    const objDiv = document.querySelector('#scrollID')

    useEffect(() => {
        if (objDiv) {
            objDiv.scrollTo(0, objDiv.scrollHeight)
        }
    }, [message])

    // useEffect(() => {
    //     if (objDiv) {
    //         objDiv.addEventListener('scroll', scrollHandler);
    //     }
    //     return function () {
    //         if (objDiv){
    //             objDiv.removeEventListener('scroll', scrollHandler)
    //         }
    //     }
    // }, [objDiv])
    // const scrollHandler = (e: any) => {
    //     // e.target.scrollHeight = e.target.scrollTop
    //     // console.log(e)
    //     console.log(e.target.scrollHeight)
    //     console.log(e.target.scrollTop)
    // }
    // const myRef = useRef(null)

    // const executeScroll = () => {
    //     if (myRef !== null){
    //         // @ts-ignore
    //         // @ts-ignore
    //         console.log( myRef.current.scrollTop)
    //         // @ts-ignore
    //         console.log( myRef.current.offsetTop)
    //         // @ts-ignore
    //         console.log( myRef.current.scrollTop)
    //     }
    // }

    if (!auth) return <Navigate to="/login"/>

    return (
        <div className={s.dialogs}>
            <div>
                <h3>
                    Messages
                </h3>
                <div className={s.dialogsContainer}>

                    <div className={s.dialogsItem}>
                        <h4>Friends:</h4>
                        <div className={s.friends}>
                            <img src={ava}/>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h5>Vasya</h5>
                                <span>Where are you?</span></div>
                        </div>
                        <div className={s.friends}>
                            <img src={ava}/>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h5>Vika</h5>
                                <span>I love you</span></div>
                        </div>
                        <div className={s.friends}>
                            <img src={scr}/>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h5>Scarlet</h5>
                                <span>Went to the cinema</span></div>
                        </div>
                        <div className={s.friends}>
                            <img src={ava}/>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h5>Mike</h5>
                                <span>Have a job</span></div>
                        </div>

                    </div>
                    <div className={s.message}>
                        <h5>Vasya</h5>
                        <hr/>
                        <div id={'scrollID'} className={s.messagesBlock}>
                            <div className={s.messageContainer}>
                                <img src={ava}/>
                                <div className={s.text}>
                                    Where are you? Go play football
                                </div>

                            </div>
                            <div className={s.messageContainer}>
                                <img src={ava}/>
                                <div className={s.text}>
                                    Where are you? Go play football
                                </div>

                            </div>
                            <div className={s.messageContainer}>
                                <img src={ava}/>
                                <div className={s.text}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                </div>

                            </div>
                            {message.map(el => <div key={el.id} className={s.messageContainerMy}>
                                <div className={s.textMy}>
                                    {el.message}
                                </div>
                                <img src={ava}/>
                            </div>)}</div>

                        <div className={s.addMessage}>
                            <AddMessageForm callback={onclickAddNewBody}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

