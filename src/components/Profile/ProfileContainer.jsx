import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import Loader from "../Loader/Loader";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render() {
        return(
            <>
                {
                    this.props.isFetching
                        ? <Loader/>
                        : <Profile{ ...this.props } profile={ this.props.profile }/>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let profileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    getProfile
})(profileContainerWithRouter);