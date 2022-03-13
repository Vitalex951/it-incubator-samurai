import React, {useState} from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostDataType} from "../../redux/state";
import {addPostActionCreator} from "../../redux/Profile-reducer";

type ProfileTypeProps = {
    posts: Array<PostDataType>
    dispatch:(type: ActionsTypes) => void

}


const Profile = (props: ProfileTypeProps) => {
    const [posts, setMessages] = useState(props.posts)

    const addPost = () => {
        props.dispatch(addPostActionCreator())
        setMessages([...props.posts])

    }
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postData={posts}
                addMessage={addPost}
                dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;