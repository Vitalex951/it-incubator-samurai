import React, {useState} from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {Button} from "../../Button/Button";
import {Input} from "../../Input/Input";
import {ActionsTypes, PostDataType} from "../../../redux/store";
import {changeNewTextAction} from "../../../redux/Profile-reducer";


type MyPostsType = {
    postData: Array<PostDataType>
    addMessage: () => void
    dispatch: (type: ActionsTypes) => void
}

const MyPosts = (props: MyPostsType) => {

        const [title, setTitle] = useState<string>('')

        const postsData = props.postData.map((m: PostDataType) => <Post
            message={m.message} likes={m.likes}
            key={m.id}
            id={m.id}/>)


        const onClickAdd = () => {
            props.dispatch(changeNewTextAction(title))
            props.addMessage()
            setTitle('')
        }

        return (

            <div className={s.postsBlock}>
                <h3>My Post</h3>
                <div>
                    <div>
                        <Input title={title}
                               setTitle={setTitle}
                               onClickAdd={onClickAdd}
                        />
                    </div>
                    <Button callback={onClickAdd} name={'add'}/>
                </div>
                <div className={s.posts}>
                    {postsData}
                </div>
            </div>
        );
    }
;

export default MyPosts;