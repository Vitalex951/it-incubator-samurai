import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProfileContainer} from "./components/Profile/ProfileInfo/ProfileContainer";

import {UsersContainer} from "./components/users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/login/Login";
import DialogsContainer from './components/Dialogs/DialogsContainer';


function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
              <HeaderContainer/>
                <NavBar/>

                <div className={'app-wrapper-content'}>
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

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;