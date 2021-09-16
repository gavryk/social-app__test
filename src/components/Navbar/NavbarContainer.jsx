import {connect} from "react-redux";
import Navbar from "./Navbar";
import React from "react";
import {compose} from "redux";
import {getFriends} from "../../redux/friends-reducer";


class NavbarContainer extends React.Component {
    componentDidMount() {
        this.props.getFriends(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return <Navbar friends={ this.props.friends }/>
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        currentPage: state.friendsPage.currentPage,
        pageSize: state.friendsPage.pageSize

    }
}

export default compose(connect(mapStateToProps, { getFriends })(NavbarContainer));
