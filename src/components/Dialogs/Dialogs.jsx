import React from "react";
import './Dialogs.scss'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className='dialog__block'>
            <h1 className='title pb-2 border-bottom'>Dialogs</h1>
            <div className="row">
                <div className="dialogs col-4 border-right p-3">
                    <div className="dialog">
                        <NavLink to='/dialogs/1'>Oleg</NavLink>
                    </div>
                    <div className="dialog active">
                        <NavLink to='/dialogs/2'>John</NavLink>
                    </div>
                    <div className="dialog">
                        <NavLink to='/dialogs/3'>Olena</NavLink>
                    </div>
                    <div className="dialog">
                        <NavLink to='/dialogs/4'>Max</NavLink>
                    </div>
                    <div className="dialog">
                        <NavLink to='/dialogs/5'>Misha</NavLink>
                    </div>
                    <div className="dialog">
                        <NavLink to='/dialogs/6'>Igor</NavLink>
                    </div>

                </div>
                <div className="messages col-8 p-3">
                    <div className="message">
                        <p>Hi</p>
                    </div>
                    <div className="message">
                        <p>What's your name?</p>
                    </div>
                    <div className="message">
                        <p>Where are you?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;