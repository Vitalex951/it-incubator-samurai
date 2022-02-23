import React, {useRef, useState} from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {v1} from "uuid";
import {Button} from "../../Button/Button";
import {Input} from "../../Input/Input";
import {PostDataType} from "../../../redux/state";


type MyPostsType = {
    postData: Array<PostDataType>
    addMessage: (message: string) => void
}

const MyPosts = (props: MyPostsType) => {

        const [title, setTitle] = useState<string>('')

        const postsData = props.postData.map((m: PostDataType) => <Post message={m.message} likes={m.likes} key={v1()}/>)

        const onClickAdd = () => {
            props.addMessage(title)
            setTitle('')
        }

        return (

            <div className={s.postsBlock}>
                <h3>My Post</h3>
                <div>
                    <div>
                        <Input title={title}
                               setTitle={setTitle}
                               onClickAdd={onClickAdd}/>
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