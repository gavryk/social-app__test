import React from "react";
import './Dialogs.scss'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className="dialog">
            <NavLink to={ path }>{ props.name }</NavLink>
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
    return (
        <div className='dialog__block'>
            <h1 className='title pb-2 border-bottom'>Dialogs</h1>
            <div className="row">
                <div className="dialogs col-4 border-right p-3">
                    <DialogItem name='Oleg' id='1'/>
                    <DialogItem name='John' id='2'/>
                    <DialogItem name='Olena' id='3'/>
                    <DialogItem name='Misha' id='4'/>
                </div>
                <div className="messages col-8 p-3">
                    <Message message='Hi' />
                    <Message message="What's your name?" />
                    <Message message='Where are you?' />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;