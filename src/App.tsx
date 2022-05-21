import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProfileContainer} from "./components/Profile/ProfileInfo/ProfileContainer";

import {UsersContainer} from "./components/users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/login/Login";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {useSelector} from "react-redux";
import {AppRootReducerType} from "./components/store/store";
import {Preloader} from "./components/common/Preloader";


function App() {
    const preloader = useSelector<AppRootReducerType, boolean>(state => state.appStatus.status)

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <NavBar/>
                {preloader ? <Preloader/>
                    : <div className={'app-wrapper-content'}>
                        <Routes>
                            <Route path={'/profile/:id'}
                                   element={<ProfileContainer/>}/>
                            <Route path={'/profile'}
                                   element={<ProfileContainer/>}/>
                            <Route path={'/dialogs'}
                                   element={<DialogsContainer/>}/>
                            <Route path={'/users'}
                                   element={<UsersContainer/>}/>
                            <Route path={'/login'}
                                   element={<Login/>}/>
                            <Route path={'/*'} element={<ProfileContainer/>}/>
                        </Routes>
                    </div>}
            </div>
        </BrowserRouter>
    );
}

export default App;