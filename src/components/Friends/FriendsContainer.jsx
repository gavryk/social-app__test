import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {getFriends, setFriends, setFriendsPage} from "../../redux/friends-reducer";

class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.getFriends(this.props.currentPage, this.props.pageSize);
    }

    onChangedFrPage = (page) => {
        this.props.getFriends(page, this.props.pageSize);
    }

    render() {
        return (
           <Friends
               friends={ this.props.friends }
               pageSize={this.props.pageSize}
               totalUserCount={this.props.totalUserCount}
               currentPage={this.props.currentPage}
               onChangedFrPage={ this.onChangedFrPage }
           />
        )
    }
}

let mapStateToProps = ( state ) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalUserCount: state.friendsPage.totalUserCount,
        currentPage: state.friendsPage.currentPage,
    }
}


export default connect(mapStateToProps, {
    setFriends,
    getFriends,
    setFriendsPage
})(FriendsContainer)