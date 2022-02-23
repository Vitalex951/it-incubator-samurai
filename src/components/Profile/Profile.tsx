import React, {useState} from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/state";

type ProfileTypeProps = {
    posts: Array<PostDataType>
}


const Profile = (props: ProfileTypeProps) => {
    const [posts, setMessages] = useState(props.posts)

    const addPost = (message: string) => {
        setMessages([...posts, {message , likes: 0}])

    }
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={posts} addMessage={addPost}/>
        </div>
    );
};

export default Profile;