import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {RootsStateType} from "./redux/state";


type props = {
    state: RootsStateType
}

function App(props: props) {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>

                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/profile'} element={<Profile
                            posts={props.state.profilePage.postData}
                        />}/>
                        <Route path={'/dialogs/*'} element={<Dialogs
                            messages={props.state.dialogsPage.dialogs}
                            users={props.state.dialogsPage.users}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
