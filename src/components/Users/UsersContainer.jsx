import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import {
    setCurrentPageActionCreator, setIsFetchingActionCreator,
    setTotalCountActionCreator,
    setUsersActionCreator,
    toggleFollowActionCreator
} from "../../redux/users-reducer";
import Loader from "../Loader/Loader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFethcing(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then(response => {
                this.props.toggleFethcing(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUserCount(response.data.totalCount);
            });
    }

    onChangedPage = (page) => {
        this.props.toggleFethcing(true);
        this.props.setPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }`)
            .then(response => {
                this.props.toggleFethcing(false);
                this.props.setUsers(response.data.items);
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
        },
        toggleFethcing: (isFetching) => {
            dispatch(setIsFetchingActionCreator(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);