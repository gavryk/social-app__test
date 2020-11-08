import React from "react";
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;

    let addMsg = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMsgChanges = (text) => {
        props.store.dispatch(updateMessageActionCreator(text));
    }

    return (
        <Dialogs
            addMsg={ addMsg }
            updateMsgText={ onMsgChanges }
            dialogsPage={ state }
        />
    )
}

export default DialogsContainer;