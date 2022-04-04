import React, {useState} from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostActionCreator} from "../../redux/Profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "../store/state/state";

const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

export default Profile;