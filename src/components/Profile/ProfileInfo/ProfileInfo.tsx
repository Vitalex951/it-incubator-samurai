import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/Profile-reducer";
import {Preloader} from "../../common/Preloader";
import ava from '../../../img/personal-user.png'
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoProps = {
    profile: ProfileType | null
    editMode: boolean
    status: string | null
    value: string

    setValue: (status: string) => void
    onDoubleClick: (editMode: boolean) => void
    addStatus: () => void
}
const ProfileInfo = (props: ProfileInfoProps) => {

    if (!props.profile) return <Preloader/>

    return (
        <div>

            {/*<div>*/}
            {/*    <img*/}
            {/*        src='http://www.автозвук.рф/az/2014/02/saab/saab%2014.jpg'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <div>  {props.profile.fullName}</div>
                <img src={props.profile.photos.large ? props.profile.photos.large : ava}/>
                <ProfileStatus
                    addStatus={props.addStatus}
                    value={props.value}
                    setValue={props.setValue}
                    status={props.status}
                    editMode={props.editMode}
                    onDoubleClick={props.onDoubleClick}
                />
            </div>

        </div>
    );
};

export default ProfileInfo;