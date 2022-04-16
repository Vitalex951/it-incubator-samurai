import React, {useEffect} from 'react';
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "../../store/store";
import {initialState, PostDataType, ProfileType, setUserProfileAC} from "../../../redux/Profile-reducer";
import axios from "axios";
import {useParams} from "react-router-dom";


export const ProfileContainer = () => {

    const posts = useSelector<AppRootReducerType, Array<PostDataType>>(state => state.profile.postData)
    const profile = useSelector<AppRootReducerType, ProfileType | null>(state => state.profile.profile)

    let params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(params.id)
        if (params.id) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.id}`)
                .then(response => {
                        dispatch(setUserProfileAC(response.data))
                    }
                )
        } else  {
            dispatch(setUserProfileAC(initialState.profile))
        }
    }, [params.id])


    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPosts posts={posts}/>
        </div>
    );
};
