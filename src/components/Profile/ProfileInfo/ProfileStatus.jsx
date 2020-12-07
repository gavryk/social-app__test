import React from "react";
import Loader from "../../Loader/Loader";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activeEditMode = () => {
        console.log(this)
        this.setState( {
            editMode: true
        } )
    }

    deactivateEditMode() {
        this.setState( {
            editMode: false
        } )
    }

    render() {
       return (
           <div>
               { !this.state.editMode
                   ? <div>
                       <h3 onDoubleClick={this.activeEditMode}>{this.props.status}</h3>
                    </div>
                   : <div>
                       <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
               }
           </div>
       )
   }
}

export default ProfileStatus;