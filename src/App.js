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
import Friends from "./components/Friends/Friends";


const App = (props) => {
    return (
        <div className='app-wrapper container-md'>
            <div className="row justify-content-between">
                <Header/>
                <Navbar friends={ props.state.friends } />
                <div className="main-content shadow rounded">
                    <Switch>
                        <Route path='/profile'>
                            <Profile profilePage={ props.state.profilePage } dispatch={ props.dispatch } />
                        </Route>
                        <Route path='/dialogs'>
                            <Dialogs
                                messagesPage={ props.state.messagesPage }
                                newMsgText={ props.state.messagesPage.newMessage }
                                dispatch={ props.dispatch }
                            />
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
                            <Friends  friends={ props.state.friends } />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}


export default App;
