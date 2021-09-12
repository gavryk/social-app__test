import React, { useState} from "react";

const Toast = ({ error, catchError }) => {
    const [show, setShow] = useState(true);

    const closeToast = () => {
        setShow(false);
        catchError(null);
    }

    return (
        <div className={`position-fixed bottom-0 end-0 p-3`} style={{zIndex: 11}}>
            <div id="liveToast" className={`toast ${show ? 'show' : ''} bg-danger`} role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <strong className="me-auto text-black">Error</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" onClick={ closeToast } aria-label="Close">

                    </button>
                </div>
                <div className="toast-body">
                    { error }
                </div>
            </div>
        </div>
    )


}

export default Toast;