import React from 'react';
import './App.scss';
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Dialogs from "./components/Dialogs/Dialogs";

import { Route, Switch} from 'react-router-dom'

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {

    return (
        <div className='app-wrapper container-md'>
            <div className="row justify-content-between">
                <Header/>
                <Navbar/>
                <div className="main-content shadow rounded">
                    <Switch>
                        <Route path='/profile' render={ () => <Profile state={ props.appState.profilePage } addPost={ props.addPost } /> }/>
                        <Route path='/dialogs'>
                            <Dialogs state={ props.appState.messagesPage } />
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
                    </Switch>
                </div>
            </div>
        </div>
    );
}


export default App;
