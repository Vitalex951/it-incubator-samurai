import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType, StatusType} from "../../../redux/reducers/Profile-reducer";
import {Preloader} from "../../common/Preloader";
import ava from '../../../img/personal-user.png'
import {ProfileStatus} from "./ProfileStatus";

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
                    valueMainUser={props.valueMainUser}
                    setValueMainUser={props.setValueMainUser}
                    editMode={props.editMode}
                    onDoubleClick={props.onDoubleClick}
                    isStatus={props.isStatus}
                    valueUser={props.valueUser}
                />
            </div>

        </div>
    );
};

export default ProfileInfo;