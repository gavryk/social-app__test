import React from "react";
import {Field} from "redux-form";
import style from "../Login/Login.module.scss";

export const TextArea = ({input, meta, placeholder, id, className}) => {

    const hasError = meta.error && meta.touched;

    return (
        <div className='form-floating'>
            <textarea
                placeholder={ placeholder }
                id={ id }
                className={`${ className } ${ hasError && 'is-invalid' }` }
                {...input}
            />
            <label htmlFor={ id } className='newPostLabel'>{ placeholder }</label>
            {
                hasError && <h6 className='text-danger mb-2'>{meta.error}</h6>
            }
        </div>
    )
}

export const Input = ({input, meta, placeholder, id, className, type}) => {

    const hasError = meta.error && meta.touched;

    return (
        <div className="form-floating">
            <input
                {...input}
                placeholder={ placeholder }
                type={ type }
                className={ className }
                id={ id }
            />
            <label htmlFor={ id } className={style.label}>{ placeholder }</label>
            {
                hasError && <h6 className='text-danger mb-2'>{meta.error}</h6>
            }
        </div>
    )
}

export const CheckBox = ({input, meta, placeholder, id, className, type}) => {

    return (
        <div className="form-check">
            <input
                {...input}
                placeholder={ placeholder }
                type={ type }
                className={ className }
                id={ id }
            />
            <label htmlFor={ id }>{ placeholder }</label>
        </div>
    )
}