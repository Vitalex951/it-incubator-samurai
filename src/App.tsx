import React from 'react';
import './App.css';
import NavBar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProfileContainer} from "./components/Profile/ProfileInfo/ProfileContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import {UsersContainer} from "./components/users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";


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
                               element={<Dialogs/>}/>
                        <Route path={'/users'}
                               element={<UsersContainer/>}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;