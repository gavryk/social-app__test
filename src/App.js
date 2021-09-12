import React, { Suspense } from 'react';
import './App.scss';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import NavbarContainer from "./components/Navbar/NavbarContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import {connect, Provider} from "react-redux";
import News from "./components/News/News";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {catchErrorThunk, initializeApp} from "./redux/app-reducer";
import Loader from "./components/common/Loader/Loader";
import store from "./redux/store";
import Toast from "./components/Toast/Toast";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const MusicContainer = React.lazy(() => import('./components/Music/MusicContainer'));



class App extends React.Component {

    catchAllUnhandledErrors = (event) => {
        this.props.catchErrorThunk(event.reason);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
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
                                    <Route exact path="/">
                                        <Redirect to="/profile" />
                                    </Route>
                                    <Route path='/profile/:userId?'>
                                        <ProfileContainer/>
                                    </Route>
                                    <Route path='/dialogs'>
                                       <Suspense fallback={ <Loader/> }>
                                           <DialogsContainer/>
                                       </Suspense>
                                    </Route>
                                    <Route path='/news'>
                                        <News/>
                                    </Route>
                                    <Route path='/music'>
                                        <Suspense fallback={ <Loader/> }>
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
                                    <Route path='*'>
                                        <div className='not-found-page d-flex justify-content-center align-items-center'>
                                            <h1 className='text-center'>Error 404 <br/> Page Not Found</h1>
                                        </div>
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>

                    {
                        this.props.globalError !== null
                            && <Toast catchErrorThunk={ this.props.catchErrorThunk } error={this.props.globalError}/>
                    }
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        appTheme: state.settingsPage.themeDark,
        initialized: state.app.initialized,
        globalError: state.app.globalError
    }
}

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp, catchErrorThunk }))(App);

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