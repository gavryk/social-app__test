import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        friendsPage: state.friendsPage
    }
}

const NavbarContainer = connect(mapStateToProps, null)(Navbar);

export default NavbarContainer;