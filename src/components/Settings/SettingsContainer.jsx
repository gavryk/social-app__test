import React from "react";
import Settings from "./Settings";
import {connect} from "react-redux";
import {toggleAppTheme} from "../../redux/setting-reducer";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {saveAvatar} from "../../redux/profile-reducer";

class SettingsContainer extends React.Component {
    render() {
        return (
            <Settings {...this.props} saveAvatar={ this.props.saveAvatar } appTheme={this.props.appTheme} />
        )

    }
}

let mapStateToProps = (state) => {
    return {
        appTheme: state.settingsPage.themeDark,
        profile: state.profilePage.profile
    }
}

// compose(
//     connect(mapStateToProps, {toggleAppTheme}),
//     withAuthRedirectComponent
// )(SettingsContainer)

// let AutRedirectComponent = withAuthRedirectComponent(SettingsContainer);

export default compose(
    connect(mapStateToProps, { toggleAppTheme, saveAvatar }),
    withAuthRedirectComponent
)(SettingsContainer);