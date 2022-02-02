import React from 'react';
import s from "../MyPosts.module.css";

type MyPostsType = {
    message: string
}

const Post = (props: MyPostsType) => {
    return (
        <div className={s.item}>
            <img
                src='https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png'/>
            {props.message}
            <div>
                <span> like</span>
            </div>
        </div>
    );
};

export default Post;