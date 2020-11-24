import React from "react";
import Loader from "../../Loader/Loader";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activeEditMode() {
        this.setState( {
            editMode: true
        } )
    }

    deactiveEditMode() {
        this.setState( {
            editMode: false
        } )
    }

    render() {
       return (
           <div>
               { !this.state.editMode
                   ? <div>
                       <h3 onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status}</h3>
                    </div>
                   : <div>
                       <input autoFocus={true} onBlur={this.deactiveEditMode.bind(this)} value={this.props.status}/>
                    </div>
               }
           </div>
       )
   }
}

export default ProfileStatus;