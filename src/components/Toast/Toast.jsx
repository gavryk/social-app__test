import React, { useState} from "react";

const Toast = ({ error, catchErrorThunk }) => {
    const [show, setShow] = useState(true);


    const closeToast = () => {
        setShow(false);
        catchErrorThunk(null);
    }

    return (
        <div className={`position-fixed bottom-0 end-0 p-3`} style={{zIndex: 11}}>
            <div id="liveToast" className={`toast ${show ? 'show' : ''} bg-danger`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="me-auto text-black">{ error.name }</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" onClick={ closeToast } aria-label="Close">

                    </button>
                </div>
                <div className="toast-body">
                    { error.message }
                </div>
            </div>
        </div>
    )


}

export default Toast;