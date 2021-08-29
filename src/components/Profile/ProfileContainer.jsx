import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getAuth} from "../../redux/auth-reducer";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import Loader from "../common/Loader/Loader";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authId;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate( prevProps, prevState, snapshot ) {
        if (this.props.match.params.userId !== prevProps.match.params.userId ) {
            this.refreshProfile();
        }
    }

    render() {
        return(
            <>
                {
                    this.props.isFetching
                        ? <Loader/>
                        : <Profile { ...this.props }
                                   profile={ this.props.profile }
                                   status={this.props.status}
                                   updateStatus={this.props.updateStatus}/>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
        connect(mapStateToProps, {
            getProfile,
            getStatus,
            updateStatus,
            getAuth
        }),
            withRouter,
        withAuthRedirectComponent
    )(ProfileContainer);