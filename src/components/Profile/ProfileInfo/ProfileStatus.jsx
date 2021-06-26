import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activeEditMode = () => {
        this.setState( {
            editMode: true
        } )
    }

    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        } );
        this.props.updateStatus(this.props.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
       return (
           <div>
               { !this.state.editMode
                   ? <div>
                       <h3 onDoubleClick={this.activeEditMode}>{this.props.status}</h3>
                    </div>
                   : <div>
                       <input
                           onChange={ this.onStatusChange }
                           autoFocus={true}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}
                       />
                    </div>
               }
           </div>
       )
   }
}

export default ProfileStatus;