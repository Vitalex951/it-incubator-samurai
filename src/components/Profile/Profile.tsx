import React, {useState} from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";
import {addPostActionCreator} from "../../redux/Profile-reducer";

type ProfileTypeProps = {
    posts: ProfilePageType
    dispatch: (type: ActionsTypes) => void

}


const Profile = (props: ProfileTypeProps) => {
    const [posts, setMessages] = useState(props.posts.postData)
    console.log(props.posts)
    const addPost = () => {
        props.dispatch(addPostActionCreator())
        setMessages([...props.posts.postData])

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