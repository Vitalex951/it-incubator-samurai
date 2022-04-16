import React from 'react';
import s from './Preloader.module.css'
import loader from "../../img/loader.gif";

export const Preloader = () => {
    return (
        <div>
            <img className={s.img} src={loader}/>
        </div>
    );
};