import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from './components/Dialogs/Dialogs';
import {UsersConnect} from "./components/users/UsersConnect";


function App() {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>

                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/profile'}
                               element={<Profile
                                   // posts={state.profileReducer}
                                   // dispatch={props.store.dispatch.bind(props.store)}
                               />}/>
                        <Route path={'/dialogs/*'}
                               element={<Dialogs
                                   /* state={state.dialogsReducer}
                                    dispatch={props.store.dispatch.bind(props.store)}*//>}/>
                        <Route path={'/users/*'}
                               element={<UsersConnect
                                 />}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
//