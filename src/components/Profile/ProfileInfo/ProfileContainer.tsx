import React, {useEffect} from 'react';
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "../../store/store";
import {PostDataType, ProfileType, showProfileUser} from "../../../redux/Profile-reducer";
import {Navigate, useParams} from "react-router-dom";


export const ProfileContainer = () => {

    const posts = useSelector<AppRootReducerType, Array<PostDataType>>(state => state.profile.postData)
    const profile = useSelector<AppRootReducerType, ProfileType | null>(state => state.profile.profile)
    const auth = useSelector<AppRootReducerType, boolean>(state => state.auth.isAuth)

    let params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showProfileUser(params.id))
    }, [params.id])

    if (!auth) return <Navigate to="/login"/>
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPosts posts={posts}/>
        </div>
    );
};
