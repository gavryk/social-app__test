import React from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom'

import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import MusicContainer from "./components/Music/MusicContainer";

const App = () => {
    return (
        <div className={`app-wrapper`}>
            <div className="container-md">
                <div className="row justify-content-between">
                    <HeaderContainer />
                    <NavbarContainer />
                    <div className="main-content shadow rounded">
                        <Switch>
                            <Route path='/profile/:userId?'>
                                <ProfileContainer />
                            </Route>
                            <Route path='/dialogs'>
                                <DialogsContainer />
                            </Route>
                            <Route path='/news'>
                                <News />
                            </Route>
                            <Route path='/music'>
                                <MusicContainer />
                            </Route>
                            <Route path='/settings'>
                                <Settings />
                            </Route>
                            <Route path='/friends'>
                                <FriendsContainer />
                            </Route>
                            <Route path='/users'>
                                <UsersContainer />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
