import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {v1} from "uuid";


const MyPosts = () => {
        const postData = [
            {message: 'Hi', likes: 3},
            {message: 'Hi', likes: 5},
            {message: 'How are you', likes: 6},
        ]
        const postsData = postData.map((m, i) => <Post message={m.message} likesCount={m.likes} key={v1()}/>
        )
        return (
            <div className={s.postsBlock}>
                <h3>My Post</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <button>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsData}
                </div>
            </div>
        );
    }
;

export default MyPosts;


