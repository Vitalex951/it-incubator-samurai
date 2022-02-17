import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>

                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/profile'} element={ <Profile /> } />
                        <Route path={'/dialogs/*'} element={ <Dialogs/> } />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
