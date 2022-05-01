import React, {useEffect, useState} from 'react';
import MyPosts from "../MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "../../store/store";
import {
    getStatus,
    PostDataType,
    ProfileType,
    showProfileUser,
    updateStatus
} from "../../../redux/Profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {ProfileApi} from "../../api/Api";


export const ProfileContainer = () => {

    const posts = useSelector<AppRootReducerType, Array<PostDataType>>(state => state.profile.postData)
    const profile = useSelector<AppRootReducerType, ProfileType | null>(state => state.profile.profile)
    const auth = useSelector<AppRootReducerType, boolean>(state => state.auth.isAuth)
    const status = useSelector<AppRootReducerType, string | null>(state => state.profile.status)
    const myID = useSelector<AppRootReducerType, number | null>(state => state.auth.id)

    const dispatch = useDispatch()

    let params = useParams()
    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')

    const onDoubleClick = (editMode: boolean) => {
        setEditMode(editMode)
    }
    const addStatus = () => {
        dispatch(updateStatus(value))
        setEditMode(false)
    }

    //set in input my status
    useEffect(() => {
        if (myID)
            getStatus(myID.toString())
        if (status)
        setValue(status)
    }, [status])

    //show status newUser
    useEffect(() => {
        dispatch(showProfileUser(params.id))
        if (params.id) {
            dispatch(getStatus(params.id))
        } else if (myID) {
            dispatch(getStatus(myID.toString()))
        }
    }, [params.id])
        useEffect(() => {

        })
    // if (!auth) return <Navigate to="/login"/>

    return (
        <div>
            <ProfileInfo
                profile={profile}
                status={status}
                value={value}
                onDoubleClick={onDoubleClick}
                editMode={editMode}
                setValue={setValue}
                addStatus={addStatus}
            />
            <MyPosts posts={posts}/>
        </div>
    );
};
