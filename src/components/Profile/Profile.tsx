import React, {useState} from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";
import {addPostActionCreator} from "../../redux/Profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "../store/state/state";

type ProfileTypeProps = {
    // posts: ProfilePageType
    // dispatch: (type: ActionsTypes) => void

}


const Profile = (props: ProfileTypeProps) => {

    // const [posts, setMessages] = useState(props.posts.postData)
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

export default Profile;