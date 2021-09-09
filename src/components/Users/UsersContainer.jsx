import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import {
    followThunk,
    getUsers,
    setPage,
    toggleFollow, toggleFollowingProgress, unFollowThunk,
} from "../../redux/users-reducer";
import {compose} from "redux";
import {
    getCurrentPage,
    getFetching,
    getFollowingInProgress,
    getPageSize,
    getTotalUserCount,
    getUsersSelector
} from "../../redux/users-selectors";

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
                <Users
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onChangedPage={this.onChangedPage}
                    followThunk={this.props.followThunk}
                    unFollowThunk={this.props.unFollowThunk}
                    users={this.props.users}
                    isFetching={ this.props.isFetching }
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

// export const UsersContainer = (props) => {
//     useEffect(() => {
//         props.getUsers(props.currentPage, props.pageSize);
//     }, [])
//
//     const onChangedPage = (page) => {
//         props.getUsers(page, props.pageSize);
//     }
//     return (
//         <>
//             { props.isFetching
//                 ? <Loader/>
//                 :  <Users
//                     totalUserCount={props.totalUserCount}
//                     pageSize={props.pageSize}
//                     currentPage={props.currentPage}
//                     onChangedPage={onChangedPage}
//                     followThunk={props.followThunk}
//                     unFollowThunk={props.unFollowThunk}
//                     users={props.users}
//                     followingInProgress={props.followingInProgress}
//                 />
//             }
//         </>
//     )
//
// }

let mapStateToProps = (state) => {
    return {
        // users: getAllUsers(state),
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state),
        followingInProgress: getFollowingInProgress(state)
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
)(UsersContainer);