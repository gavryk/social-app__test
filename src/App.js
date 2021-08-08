import React from 'react';
import './App.scss';
import {Route, Switch, withRouter} from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import MusicContainer from "./components/Music/MusicContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import {connect} from "react-redux";
import News from "./components/News/News";
import Login from "./components/Login/Login";
import {getAuth} from "./redux/auth-reducer";
import {compose} from "redux";


class App extends React.Component {
    componentDidMount() {
        this.props.getAuth();
    }

    render() {
        return (
            <div className={`app-wrapper ${this.props.appTheme ? 'dark' : 'light'}`}>
                <div className="container">
                    <div className="row justify-content-between">
                        <HeaderContainer/>
                        <NavbarContainer/>
                        <div className="main-content shadow rounded">
                            <Switch>
                                <Route path='/profile/:userId?'>
                                    <ProfileContainer/>
                                </Route>
                                <Route path='/dialogs'>
                                    <DialogsContainer/>
                                </Route>
                                <Route path='/news'>
                                    <News/>
                                </Route>
                                <Route path='/music'>
                                    <MusicContainer/>
                                </Route>
                                <Route path='/settings'>
                                    <SettingsContainer/>
                                </Route>
                                <Route path='/friends'>
                                    <FriendsContainer/>
                                </Route>
                                <Route path='/users'>
                                    <UsersContainer/>
                                </Route>
                                <Route path='/login'>
                                    <Login/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        appTheme: state.settingsPage.themeDark
    }
}

export default compose(
    connect(mapStateToProps, {getAuth}),
    withRouter
)(App);
