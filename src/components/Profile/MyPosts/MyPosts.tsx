import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";


const MyPosts = () => {
    return (
        <div>
            <Post message='Hello, how are you?' />
            <Post message='I am funny thn' />
        </div>
    );
};

export default MyPosts;


