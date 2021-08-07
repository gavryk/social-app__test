import React from "react";

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