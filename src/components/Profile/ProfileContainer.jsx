import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setFetching, setUserProfile} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import Loader from "../Loader/Loader";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setFetching(false);
                this.props.setUserProfile(response.data);
            });
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
    setUserProfile,
    setFetching
})(profileContainerWithRouter);