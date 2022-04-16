import React from 'react';
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/Profile-reducer";
import {Preloader} from "../../common/Preloader";
import ava from '../../../img/personal-user.png'

type ProfileInfoProps = {
    profile: ProfileType | null
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
            </div>

        </div>
    );
};

export default ProfileInfo;