import {connect} from "react-redux";
import Users from "./Users";
import {
    setCurrentPageActionCreator,
    setTotalCountActionCreator,
    setUsersActionCreator,
    toggleFollowActionCreator
} from "../../redux/users-reducer";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;