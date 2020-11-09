import React from "react";
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().messagesPage;
                    let addMsg = () => {
                        store.dispatch(addMessageActionCreator());
                    }

                    let onMsgChanges = (text) => {
                        store.dispatch(updateMessageActionCreator(text));
                    }
                    return (
                        <Dialogs
                            addMsg={addMsg}
                            updateMsgText={onMsgChanges}
                            dialogsPage={state}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;