import React from "react";
import userAvatar from "../../assets/img/user-avatar.png";
import * as axios from "axios";
import './Users.scss';

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <div className='users_wrapper'>
                <h1 className='title pb-2 border-bottom'>Users</h1>
                <div className="users row">
                    {
                        this.props.users.map((user) =>
                            <div key={ user.id } className='user card col-lg-4 col-md-6 col-xs-12  mb-4 h-100'>
                                <img src={user.photos.small !== null ? user.photos.small : userAvatar} className='card-img-top' alt=""/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{ user.name }</h5>
                                    <p className="card-text">{ user.status }</p>
                                    <button
                                        onClick={() => { this.props.toggleFollow(user.id) }}
                                        className={`btn ${!user.followed ? 'btn-success' : 'btn-danger'}`}>{!user.followed ? 'Fallow' : 'Unfollow'}
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Users;