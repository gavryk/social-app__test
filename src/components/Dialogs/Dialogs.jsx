import React from "react";
import './Dialogs.scss'
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogs = state.dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
    })

    let messages = state.messages.map((message) => {
        return <Message message={message.message} key={message.id} />
    })

    let newMsg = React.createRef();

    let onAddMsg = () => {
        props.addMsg();
    }

    let onMsgChanges = (e) => {
        let text = e.target.value;
        props.updateMsgText(text);
    }

    let onFocus = () => {
        props.onFocus();
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
                        <textarea onFocus={ onFocus } onChange={ onMsgChanges } className="form-control form-control-lg h-25" ref={ newMsg } value={ state.newMessage } />
                        <div className="btn-wrapper text-center">
                            <button className='btn btn-success mt-2' onClick={ onAddMsg }>Add Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;