import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import Loader from "../Loader/Loader";
import {compose} from "redux";
import {getAuth} from "../../redux/auth-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12654;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return(
            <>
                {
                    this.props.isFetching
                        ? <Loader/>
                        : <Profile { ...this.props } profile={ this.props.profile } status={this.props.status} updateStatus={this.props.updateStatus}/>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
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
        // withAuthRedirectComponent
    )(ProfileContainer);