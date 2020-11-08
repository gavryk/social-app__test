import React from "react";
import './Dialogs.scss'
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";
import { addMessageActionCreator, updateMessageActionCreator } from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogs = props.messagesPage.dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    })

    let messages = props.messagesPage.messages.map((message) => {
        return <Message message={message.message} />
    })

    let newMsg = React.createRef();

    let addMsg = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMsgChanges = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageActionCreator(text));
    }

    return (
        <div className='dialog__block'>
            <h1 className='title pb-2 border-bottom'>Dialogs</h1>
            <div className="row">
                <div className="dialogs col-4 border-right p-3">
                    { dialogs }
                </div>
                <div className="messages col-8 p-3">
                    { messages }
                    <div className="new-message-input">
                        <textarea onChange={ onMsgChanges } className="form-control form-control-lg h-25" ref={ newMsg } value={ props.newMsgText } />
                        <div className="btn-wrapper text-center">
                            <button className='btn btn-success mt-2' onClick={ addMsg }>Add Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;