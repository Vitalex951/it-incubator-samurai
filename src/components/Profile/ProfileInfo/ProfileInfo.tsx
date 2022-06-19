import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType, StatusType} from "../../../redux/reducers/Profile-reducer";
import {Preloader} from "../../common/Preloader";
import ava from '../../../img/personal-user.png'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {ProfileEdit, valuesFromProfileEditType} from "../ProfileEdit/ProfileEdit";
import {TextField} from "@material-ui/core";
import {FaEdit} from "react-icons/fa"

type ProfileInfoProps = {
    profile: ProfileType | null
    editMode: boolean
    valueMainUser: string
    isUser: StatusType
    valueUser: string | null

    setValueMainUser: (status: string) => void
    onDoubleClick: (editMode: boolean) => void
    addStatus: () => void
    changeProfilePhoto: (photo: any) => void
    editProfile: (fullName: string, values: valuesFromProfileEditType) => void
}
const ProfileInfo = (props: ProfileInfoProps) => {
    const [fullName, setfullName] = useState<string>(props.profile?.fullName ? props.profile?.fullName : '')
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.changeProfilePhoto(e.target.files[0])
        }
    }
    const [edit, setEdit] = useState<boolean>(false)
    const changeEditOnClick = () => {
        setEdit(!edit)
    }
    const onChangeFullName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setfullName(e.currentTarget.value)
    }
    const editProfile = (values: valuesFromProfileEditType) => {
        props.editProfile(fullName, values)
    }

    if (!props.profile) return <Preloader/>

    return (
        <div className={s.mainBlock}>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : ava}/>


                {props.profile.userId && edit && <div><input type={'file'} onChange={onMainPhotoSelected}/></div>}
            </div>

            <div className={s.data}>
                <div className={s.fullName}>
                    {edit
                        ? <TextField label="FullName" value={fullName} variant="outlined" name="fullName"
                                     onChange={onChangeFullName}/>
                        : props.profile.fullName}

                    {props.isUser === "mainUser" && <FaEdit onClick={changeEditOnClick} size={25}/>}
                </div>
                {edit
                    ? ''
                    : <ProfileStatus
                        addStatus={props.addStatus}
                        valueMainUser={props.valueMainUser}
                        setValueMainUser={props.setValueMainUser}
                        editMode={props.editMode}
                        onDoubleClick={props.onDoubleClick}
                        isUser={props.isUser}
                        valueUser={props.valueUser}
                    />
                }
                <hr/>
                {edit ? <ProfileEdit editProfile={editProfile}/> : <div className={s.infoContainer}>
                    <div className={s.info}>
                        <span>About Me:</span>
                        <span>Looking For A Job:</span>
                        <span>Contacts:</span>
                        <div className={s.infoContacts}>
                            <span>facebook:</span>
                            <span>website:</span>
                            <span>vk:</span>
                            <span>twitter:</span>
                            <span>instagram:</span>
                            <span>youtube:</span>
                            <span>github:</span>
                            <span>mainLink:</span>
                        </div>
                    </div>
                    <div className={s.infoDescription}>
                        <span>{props.profile.aboutMe}</span>
                        <span>{props.profile.lookingForAJob.toString()}</span>
                        <span>    </span>
                        <div className={s.descriptionContacts}>
                            <span>{props.profile.contacts.facebook}</span>
                            <span>{props.profile.contacts.website}</span>
                            <span>{props.profile.contacts.vk}</span>
                            <span>{props.profile.contacts.twitter}</span>
                            <span>{props.profile.contacts.instagram}</span>
                            <span>{props.profile.contacts.youtube}</span>
                            <span>{props.profile.contacts.github}</span>
                            <span>{props.profile.contacts.mainLink}</span>
                        </div>
                    </div>

                </div>}

            </div>


        </div>
    );
};

export default ProfileInfo;