import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import { setFriends } from "../../redux/friends-reducer";

class FriendsContainer extends React.Component {
    render() {
        return (
           <Friends
               {...this.props}
           />
        )
    }
}

let mapStateToProps = ( state ) => {
    return {
        friends: state.friendsPage.friends,
    }
}


export default connect(mapStateToProps, {
    setFriends
})(FriendsContainer)