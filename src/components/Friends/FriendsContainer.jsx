import {connect} from "react-redux";
import Friends from "./Friends";
import {setFriendsActionCreator} from "../../redux/friends-reducer";

let mapStateToProps = ( state ) => {
    return {
        friends: state.friendsPage.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setFriends: (friends) => {
            dispatch(setFriendsActionCreator(friends));
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;