import {connect} from "react-redux";
import Friends from "./Friends";

let mapStateToProps = ( state ) => {
    return {
        friendsPage: state.friendsPage
    }
}

const FriendsContainer = connect(mapStateToProps, null)(Friends)

export default FriendsContainer;