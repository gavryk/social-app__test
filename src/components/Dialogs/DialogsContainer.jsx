import {addMessageActionCreator, focusAreaActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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
let AuthRedirectComponent = withAuthRedirectComponent(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;