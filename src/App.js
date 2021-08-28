import React, { Suspense } from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import MusicContainer from "./components/Music/MusicContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import {connect, Provider} from "react-redux";
import News from "./components/News/News";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Loader from "./components/common/Loader/Loader";
import store from "./redux/store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const MusicContainer = React.lazy(() => import('./components/Music/MusicContainer'));



class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Loader/>
        } else {
            return(
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
                                       <Suspense fallback={ <div>Loading...</div> }>
                                           <DialogsContainer/>
                                       </Suspense>
                                    </Route>
                                    <Route path='/news'>
                                        <News/>
                                    </Route>
                                    <Route path='/music'>
                                        <Suspense fallback={ <div>Loading...</div> }>
                                            <MusicContainer/>
                                        </Suspense>
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
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        appTheme: state.settingsPage.themeDark,
        initialized: state.app.initialized
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={ store }>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp;