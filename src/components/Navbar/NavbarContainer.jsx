import {connect} from "react-redux";
import Navbar from "./Navbar";
import React, {useEffect} from "react";
import {compose} from "redux";
import {getFriends} from "../../redux/friends-reducer";


const NavbarContainer = (props) => {
    // componentDidMount() {
    //     this.props.getFriends(this.props.currentPage, this.props.pageSize);
    // }

    useEffect(() => {
        props.getFriends(props.currentPage, props.pageSize);
    }, [props.friends])

    return (
        <Navbar friends={ props.friends }/>
    )
}

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        currentPage: state.friendsPage.currentPage,
        pageSize: state.friendsPage.pageSize

    }
}

export default compose(connect(mapStateToProps, { getFriends })(NavbarContainer));
