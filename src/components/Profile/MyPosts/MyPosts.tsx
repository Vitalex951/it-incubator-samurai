import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";


const MyPosts = () => {
    return (
        <div>
            <Post message='Hello, how are you?' likesCount={4} />
            <Post message='I am funny thn' likesCount={5} />
        </div>
    );
};

export default MyPosts;


