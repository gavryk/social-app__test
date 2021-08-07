import React from "react";
import './Dialogs.scss'
import DialogItem from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let state = props.dialogsPage

    let dialogs = state.dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
    })

    let messages = state.messages.map((message) => {
        return <Message message={message.message} key={message.id} />
    })


    let addMessage = (value) => {
        props.addMsg(value.newMessageBody);
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
                    <AddMsgForm onSubmit={ addMessage } />
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form className="new-message-input" onSubmit={ props.handleSubmit }>
            <div className="form-floating">
                <Field component='textarea' name='newMessageBody' placeholder='Add New Message' className='form-control' id='addNewMsg'/>
                <label htmlFor="addNewMsg" className='newMsgLabel'>Add New Message</label>
            </div>
            <div className="btn-wrapper text-center">
                <button type='submit' className='btn btn-success mt-2'>Add Message</button>
            </div>
        </form>
    )
}

const AddMsgForm = reduxForm({form: 'add-message'})(AddMessageForm);

export default Dialogs;