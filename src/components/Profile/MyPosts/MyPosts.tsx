import React, {useState} from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {Button} from "../../Button/Button";
import {Input} from "../../Input/Input";
import {PostDataType, ProfilePageType, UsersType} from "../../../redux/store";
import {addPostActionCreator} from "../../../redux/Profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "../../store/state/state";


type MyPostsType = {
    // postData: Array<PostDataType>
}

const MyPosts = () => {
        const [title, setTitle] = useState<string>('')

        const dispatch = useDispatch()

        const posts = useSelector<AppRootReducerType, Array<PostDataType>>(state => state.profile)

        const postsData = posts.map(m => <Post
            message={m.message} likes={m.likes}
            key={m.id}
            id={m.id}/>)

        const onClickAdd = () => {
            dispatch(addPostActionCreator(title))
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