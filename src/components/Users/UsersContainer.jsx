import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import {
    setCurrentPageActionCreator,
    setTotalCountActionCreator,
    setUsersActionCreator,
    toggleFollowActionCreator
} from "../../redux/users-reducer";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            });
    }

    onChangedPage = (page) => {
        this.props.setPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onChangedPage={this.onChangedPage}
                toggleFollow={this.props.toggleFollow}
                users={this.props.users}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setPage: (page) => {
            dispatch(setCurrentPageActionCreator(page));
        },
        setTotalUserCount: (total) => {
            dispatch(setTotalCountActionCreator(total));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);