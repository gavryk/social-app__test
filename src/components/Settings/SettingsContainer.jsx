import React from "react";
import Settings from "./Settings";
import {connect} from "react-redux";
import {toggleAppTheme} from "../../redux/setting-reducer";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";

class SettingsContainer extends React.Component {
    render() {
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
    }
}

let AutRedirectComponent = withAuthRedirectComponent(SettingsContainer);

export default connect(mapStateToProps, {
    toggleAppTheme
})(AutRedirectComponent)