import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='http://www.автозвук.рф/az/2014/02/saab/saab%2014.jpg'/>
            </div>
            <div>
                ava +description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;