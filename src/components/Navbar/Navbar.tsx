import React from 'react';
import classes from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className="item">
                <a href="/profile"> Profile</a>
            </div>
            <div className={classes.item}>
                <a href="/Messages"> Messages</a>
            </div>
            <div className={`${classes.item} ${classes.gold}`}>
                <a> News</a>
            </div>
            <div className={classes.item}>
                <a> Music</a>
            </div>
            <div className={classes.item}>
                Messages
            </div>
        </nav>
    );
};

export default Navbar;