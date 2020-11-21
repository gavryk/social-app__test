import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import {
    getUsers,
    setPage,
    toggleFollow, toggleFollowingProgress,
} from "../../redux/users-reducer";
import Loader from "../Loader/Loader";
import {getWether} from "../../api/api";

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
                        toggleFollow={this.props.toggleFollow}
                        users={this.props.users}
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
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

export default connect(mapStateToProps, {
    toggleFollow,
    setPage,
    getUsers,
    toggleFollowingProgress
})(UsersContainer);