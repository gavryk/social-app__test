import {addMessageActionCreator, focusAreaActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMsg: () => {
            dispatch(addMessageActionCreator());
        },
        updateMsgText: (text) => {
            dispatch(updateMessageActionCreator(text));
        },
        onFocus: () => {
            dispatch(focusAreaActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;