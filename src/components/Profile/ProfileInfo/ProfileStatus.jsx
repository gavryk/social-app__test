import React, {useEffect} from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = React.useState(false);
    const [status, setStatus] = React.useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    function activeEditMode() {
        setEditMode(true);
    }

    function deactivateEditMode() {
        setEditMode(false);
        props.updateStatus(status);
    }

    function onStatusChange(e) {
        setStatus(e.target.value);
    }
    return (
        <div>
            { !editMode
                ? <div>
                    <h3 onDoubleClick={activeEditMode}>{props.status || '----'}</h3>
                </div>
                : <div>
                    <form>
                        <input
                            className='form-control w-25 m-auto'
                            onChange={ onStatusChange }
                            autoFocus={true}
                            onBlur={deactivateEditMode}
                            value={status}
                        />
                    </form>
                </div>
            }
        </div>
    )
}

export default ProfileStatus;