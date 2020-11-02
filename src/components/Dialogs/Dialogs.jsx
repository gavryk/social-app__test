import React from "react";
import './Dialogs.scss'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className="dialog">
            <NavLink className='border-bottom' to={ path }>{ props.name }<i className="fas fa-chevron-right"></i></NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className="message">
            <p>{ props.message }</p>
        </div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Olena'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Max'},
        {id: 5, name: 'John'}
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What"s your name?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'What?'}
    ]

    let dialogs = dialogsData.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    })

    let messages = messagesData.map((message) => {
        return <Message message={message.message} />
    })

    return (
        <div className='dialog__block'>
            <h1 className='title pb-2 border-bottom'>Dialogs</h1>
            <div className="row">
                <div className="dialogs col-4 border-right p-3">
                    {dialogs}
                </div>
                <div className="messages col-8 p-3">
                    {messages}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;