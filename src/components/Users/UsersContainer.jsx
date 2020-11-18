import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import {
    setIsFetching,
    setPage,
    setTotalUserCount,
    setUsers,
    toggleFollow,
} from "../../redux/users-reducer";
import Loader from "../Loader/Loader";
import {getUsers} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUserCount(data.totalCount);
            });
    }


    onChangedPage = (page) => {
        this.props.setIsFetching(true);
        this.props.setPage(page);
        getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
            });
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
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    toggleFollow,
    setUsers,
    setPage,
    setTotalUserCount,
    setIsFetching
})(UsersContainer);