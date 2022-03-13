import React, {useState} from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostDataType} from "../../redux/state";

type ProfileTypeProps = {
    posts: Array<PostDataType>
    dispatch:(type: ActionsType) => void
}


const Profile = (props: ProfileTypeProps) => {
    const [posts, setMessages] = useState(props.posts)

    const addPost = () => {
        props.dispatch({type: "ADD-POST"})
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