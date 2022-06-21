import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Posts/Post";
import {addPostAC, PostDataType} from "../../../redux/reducers/Profile-reducer";
import {useDispatch} from "react-redux";
import {AddMPostForm} from "./AddNewPost";

type MyPostsPropsType = {
    posts: Array<PostDataType>
}

export const MyPosts = (props: MyPostsPropsType) => {
    const dispatch = useDispatch()

    const postsData = props.posts.map(m => <Post
        message={m.message} likes={m.likes}
        key={m.id}
        id={m.id}/>)

    const onClickAdd = (value: string) => {
        dispatch(addPostAC(value))
    }

    return <div className={s.postsBlock}>
        <h3>My Post</h3>

        <AddMPostForm callback={onClickAdd}/>
        <div className={s.posts}>
            {postsData}
        </div>
    </div>
};

