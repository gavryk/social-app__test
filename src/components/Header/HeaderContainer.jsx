import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, logout, setUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.getAuth();
    }

    render() {
        return <Header { ...this.props }/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        appTheme: state.settingsPage.themeDark,
    }
}

export default connect(mapStateToProps, {
    setUserData,
    getAuth,
    logout
})(HeaderContainer)
