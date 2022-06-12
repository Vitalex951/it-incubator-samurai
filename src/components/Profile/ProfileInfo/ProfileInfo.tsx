import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType, StatusType} from "../../../redux/reducers/Profile-reducer";
import {Preloader} from "../../common/Preloader";
import ava from '../../../img/personal-user.png'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfileInfoProps = {
    profile: ProfileType | null
    editMode: boolean
    valueMainUser: string
    isStatus: StatusType
    valueUser: string | null

    setValueMainUser: (status: string) => void
    onDoubleClick: (editMode: boolean) => void
    addStatus: () => void
}
const ProfileInfo = (props: ProfileInfoProps) => {

    if (!props.profile) return <Preloader/>

    return (
        <div className={s.mainBlock}>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : ava}/>
            </div>
            <div className={s.data}>
                <div className={s.fullName}>
                    {props.profile.fullName}
                </div>
                <ProfileStatus
                    addStatus={props.addStatus}
                    valueMainUser={props.valueMainUser}
                    setValueMainUser={props.setValueMainUser}
                    editMode={props.editMode}
                    onDoubleClick={props.onDoubleClick}
                    isStatus={props.isStatus}
                    valueUser={props.valueUser}
                />
                <hr/>
                <div className={s.infoContainer}>
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
                        <span>{props.profile.lookingForAJob}</span>
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

                </div>

            </div>


        </div>
    );
};

export default ProfileInfo;