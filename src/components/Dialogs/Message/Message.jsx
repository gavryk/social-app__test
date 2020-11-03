import React from "react";
import './Message.scss'

const Message = (props) => {
    return (
        <div className="message">
            <p>{ props.message }</p>
        </div>
    )
}

export default Message;