import React, {useEffect, useState} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../redux/store";
import {
    changeIsStatusAC, changeProfilePhotoTC, changeProfileTC,
    getStatusMainUser,
    getStatusUser,
    showProfileUserTC,
    updateStatus
} from "../../redux/reducers/Profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {MyPosts} from "./MyPosts/MyPosts";
import {CircularProgress} from "@material-ui/core";
import style from './Profile.module.css'
import {valuesFromProfileEditType} from "./ProfileEdit/ProfileEdit";


export const ProfileContainer = () => {

    const posts = useAppSelector(state => state.profile.postData)
    const profile = useAppSelector(state => state.profile.profile)
    const auth = useAppSelector(state => state.auth.data.email)
    const statusMainUser = useAppSelector(state => state.profile.statusMainUser)
    const statusUser = useAppSelector(state => state.profile.statusUser)
    const myID = useAppSelector(state => state.auth.data.id)
    const isUser = useAppSelector(state => state.profile.isUser)
    const statusLoader = useAppSelector(state => state.profile.loaderStatus)

    const dispatch = useDispatch()

    const params = useParams()

    const [editMode, setEditMode] = useState<boolean>(false)
    const [valueMainUser, setValueMainUser] = useState<string>(statusMainUser ? statusMainUser : '')

    const onDoubleClick = (editMode: boolean) => {
        setEditMode(editMode)
    }
    const changeProfilePhoto = (photo: any) => {
        dispatch(changeProfilePhotoTC(photo))
    }

    const editProfile = (fullName: string, values: valuesFromProfileEditType) => {
        if(myID){
            dispatch(changeProfileTC(fullName, myID, values))
        }


    }

    const addStatus = () => {
        dispatch(updateStatus(valueMainUser))
        setEditMode(false)
    }


    //set in input my status
    useEffect(() => {
        if (myID) {
            getStatusMainUser(myID.toString())
            if (statusMainUser){
                setValueMainUser(statusMainUser)
            }
        }
    }, [statusMainUser])

    //show status newUser
    useEffect(() => {
        if (params.id) {
            dispatch(showProfileUserTC(params.id))
            dispatch(getStatusUser(params.id))
            dispatch(changeIsStatusAC("user"))
        } else if (myID) {
            dispatch(getStatusMainUser(myID.toString()))
            dispatch(showProfileUserTC(myID.toString()))
            dispatch(changeIsStatusAC("mainUser"))
        }
    }, [params.id])

    if (!auth) return <Navigate to="/login"/>

    return (
        <div className={style.container}>
            {statusLoader ? <div style={{
                width: '640px',
                height: '500px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}><CircularProgress/></div> : <>
                <ProfileInfo
                    editProfile={editProfile}
                    changeProfilePhoto={changeProfilePhoto}
                    isUser={isUser}
                    profile={profile}
                    valueMainUser={valueMainUser}
                    onDoubleClick={onDoubleClick}
                    editMode={editMode}
                    setValueMainUser={setValueMainUser}
                    addStatus={addStatus}
                    valueUser={statusUser}
                />
                <MyPosts posts={posts}/>
            </>
            }
        </div>
    );
};
