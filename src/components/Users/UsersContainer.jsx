import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import {
    followThunk,
    getUsers,
    setPage,
    toggleFollow, toggleFollowingProgress, unFollowThunk,
} from "../../redux/users-reducer";
import Loader from "../Loader/Loader";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {userAPI} from "../../api/api";
import axios from "axios";

class UsersContainer extends React.Component {
    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onChangedPage = (page) => {
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return (
            <>
                { this.props.isFetching
                    ? <Loader/>
                    :  <Users
                        totalUserCount={this.props.totalUserCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onChangedPage={this.onChangedPage}
                        followThunk={this.props.followThunk}
                        unFollowThunk={this.props.unFollowThunk}
                        users={this.props.users}
                        followingInProgress={this.props.followingInProgress}
                    />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(connect(mapStateToProps, {
        toggleFollow,
        setPage,
        getUsers,
        toggleFollowingProgress,
        followThunk,
        unFollowThunk
    }),
    withAuthRedirectComponent
)(UsersContainer);