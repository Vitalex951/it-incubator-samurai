import React, {useState} from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {Button} from "../../Button/Button";
import {Input} from "../../Input/Input";
import {addPostAC, PostDataType} from "../../../redux/Profile-reducer";
import {useDispatch} from "react-redux";

type MyPostsPropsType = {
    posts: Array<PostDataType>
}

const MyPosts = (props: MyPostsPropsType) => {
        const [title, setTitle] = useState<string>('')

        const dispatch = useDispatch()



        const postsData = props.posts.map(m => <Post
            message={m.message} likes={m.likes}
            key={m.id}
            id={m.id}/>)

        const onClickAdd = () => {
            dispatch(addPostAC(title))
            setTitle('')
        }

        return (

            <div className={s.postsBlock}>
                <h3>My Post</h3>
                <div>
                    <div>
                        <Input value={title}
                               setValue={setTitle}
                               onClickAdd={onClickAdd}
                        />
                    </div>
                    <Button disabled={false}  callback={onClickAdd} name={'add'}/>
                </div>
                <div className={s.posts}>
                    {postsData}
                </div>
            </div>
        );
    }
;

export default MyPosts;