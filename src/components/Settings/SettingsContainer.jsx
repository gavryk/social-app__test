import React from "react";
import Settings from "./Settings";
import {connect} from "react-redux";
import {toggleAppTheme} from "../../redux/setting-reducer";
import {Redirect} from "react-router-dom";

class SettingsContainer extends React.Component {
    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Settings
                {...this.props}
                appTheme={this.props.appTheme}
            />
        )

    }
}

let mapStateToProps = (state) => {
    return {
        appTheme: state.settingsPage.themeDark,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    toggleAppTheme
})(SettingsContainer)