import React from 'react';
import './App.scss';
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

import { Route, Switch} from 'react-router-dom'

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className={`app-wrapper`}>
            <div className="container-md">
                <div className="row justify-content-between">
                    <Header/>
                    <Navbar store={ props.store }/>
                    <div className="main-content shadow rounded">
                        <Switch>
                            <Route path='/profile'>
                                <Profile />
                            </Route>
                            <Route path='/dialogs'>
                                <DialogsContainer />
                            </Route>
                            <Route path='/news'>
                                <News />
                            </Route>
                            <Route path='/music'>
                                <Music />
                            </Route>
                            <Route path='/settings'>
                                <Settings />
                            </Route>
                            <Route path='/friends'>
                                <Friends store={ props.store } />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;
