import React from "react";
import './Dialogs.scss'
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = props.messagesPage.dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    })

    let messages = props.messagesPage.messages.map((message) => {
        return <Message message={message.message} />
    })

    return (
        <div className='dialog__block'>
            <h1 className='title pb-2 border-bottom'>Dialogs</h1>
            <div className="row">
                <div className="dialogs col-4 border-right p-3">
                    { dialogs }
                </div>
                <div className="messages col-8 p-3">
                    { messages }
                </div>
            </div>
        </div>
    )
}

export default Dialogs;