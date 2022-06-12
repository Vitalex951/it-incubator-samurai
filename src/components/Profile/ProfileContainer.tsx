import React, {useEffect, useState} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../redux/store";
import {
    changeIsStatusAC,
    getStatusMainUser,
    getStatusUser,
    showProfileUser,
    updateStatus
} from "../../redux/reducers/Profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {MyPosts} from "./MyPosts/MyPosts";


export const ProfileContainer = () => {

    const posts = useAppSelector(state => state.profile.postData)
    const profile = useAppSelector(state => state.profile.profile)
    const auth = useAppSelector(state => state.auth.data.email)
    const statusMainUser = useAppSelector(state => state.profile.statusMainUser)
    const statusUser = useAppSelector(state => state.profile.statusUser)
    const myID = useAppSelector(state => state.auth.data.id)
    const isStatus = useAppSelector(state => state.profile.isStatus)

    const dispatch = useDispatch()

    const params = useParams()

    const [editMode, setEditMode] = useState<boolean>(false)
    const [valueMainUser, setValueMainUser] = useState<string>('')

    const onDoubleClick = (editMode: boolean) => {
        setEditMode(editMode)
    }
    const addStatus = () => {
        dispatch(updateStatus(valueMainUser))
        setEditMode(false)
    }

    //set in input my status
    useEffect(() => {
        if (myID) {
            getStatusMainUser(myID.toString())
            if (statusMainUser)
                setValueMainUser(statusMainUser)
        }
    }, [statusMainUser])

    //show status newUser
    useEffect(() => {
        dispatch(showProfileUser(params.id))
        if (params.id) {
            dispatch(getStatusUser(params.id))
            dispatch(changeIsStatusAC("user"))
        } else if (myID) {
            dispatch(getStatusMainUser(myID.toString()))
            dispatch(changeIsStatusAC("mainUser"))
        }
    }, [params.id])

    if (!auth) return <Navigate to="/login"/>


    return (
        <div>
            <ProfileInfo
                isStatus={isStatus}
                profile={profile}
                valueMainUser={valueMainUser}
                onDoubleClick={onDoubleClick}
                editMode={editMode}
                setValueMainUser={setValueMainUser}
                addStatus={addStatus}
                valueUser={statusUser}
            />
            <MyPosts posts={posts}/>
        </div>
    );
};
