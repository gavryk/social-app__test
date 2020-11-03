import React from "react";
import { NavLink } from "react-router-dom";
import './Dialog.scss'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className="dialog">
            <NavLink className='border-bottom' to={ path }>{ props.name }<i className="fas fa-chevron-right"></i></NavLink>
        </div>
    )
}

export default DialogItem;