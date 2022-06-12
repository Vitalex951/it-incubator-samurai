import React, {useState} from 'react';
import s from "../MyPosts.module.css";
import {PostDataType} from "../../../../redux/reducers/Profile-reducer";
import scr from '../../../../img/scarlett-johansson.jpg'


type MyPostsType = PostDataType

const Post = (props: MyPostsType) => {

    return (
        <div>
            <div className={s.item}>
                <img
                    src={scr}/>
                <div>
                    <h4>
                        Scarlett Johansson
                    </h4>
                    <div style={{margin: '5px 0 0 10px'}}>   {props.message}</div>
                </div>

            </div>
            <hr/>
        </div>
    );
};

export default Post;