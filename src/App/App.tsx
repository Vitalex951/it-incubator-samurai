import React, {useEffect} from 'react';
import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import {ProfileContainer} from "../components/Profile/ProfileContainer";

import {UsersContainer} from "../components/Friends/UsersContainer";
import {HeaderContainer} from "../components/Header/HeaderContainer";
import {Login} from "../components/login/Login";
import {DialogsContainer} from '../components/Dialogs/DialogsContainer';
import {useAppSelector} from "../redux/store";
import {Preloader} from "../components/common/Preloader";
import {useDispatch} from "react-redux";
import {AuthUser} from "../redux/reducers/auth-reducer";
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";
import {Navbar} from "../components/Navbar/Navbar";


function App() {
    const status = useAppSelector(state => state.app.status)
    const auth = useAppSelector(state => state.auth.data.isAuth)
    const dispatch = useDispatch()
    const myID = useAppSelector(state => state.auth.data.id)

    useEffect(() => {
        dispatch(AuthUser())
    }, [])


    return (
        <HashRouter>
            {auth && <HeaderContainer/>}
            <div style={{height: '5px'}}> {status && <Preloader/>} </div>
            <div className={'app-wrapper'}>
                {auth && <Navbar/>}

                <div className={'app-wrapper-content'}>
                    {status ? <Preloader/> : <Routes>
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
                    </Routes>}
                </div>
            </div>
            <ErrorSnackbar/>
        </HashRouter>
    );
}

export default App;