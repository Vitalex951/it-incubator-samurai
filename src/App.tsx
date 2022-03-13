import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {ScoreType} from "./redux/state";


type props = {
    store: ScoreType
}

function App(props: props) {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>

                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/profile'}
                               element={<Profile
                                   posts={props.store._state.profilePage.postData}
                                   dispatch={props.store.dispatch.bind(props.store)}
                                   />}/>
                        <Route path={'/dialogs/*'}
                               element={<Dialogs
                                   state={props.store._state.dialogsPage}
                               dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
