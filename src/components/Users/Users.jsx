import userAvatar from "../../assets/img/user-avatar.png";
import React from "react";
import './Users.scss';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Paginator from "../common/Paginator/Paginator";

const Users = ({ totalUserCount, pageSize, onChangedPage, currentPage, ...props }) => {
    //Search Product Hook
    let [searchValue, setSearchValue] = React.useState('');

    const changeValue = (event) => {
        setSearchValue(event.target.value);
    };

    const users = props.users.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <div className='users_wrapper'>
            <div className="d-flex justify-content-between align-items-center">
                <h1 className='title pb-2 border-bottom'>Users</h1>
                <div className="search-block d-flex align-items-center justify-content-between p-10">
                    <button className="button clear">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <input onChange={ changeValue } value={ searchValue } type="text" placeholder='Search...'/>
                </div>
            </div>

            {/*paginator*/}
            <Paginator
                totalUserCount={ totalUserCount }
                pageSize={ pageSize }
                onChangedPage={ onChangedPage }
                currentPage={ currentPage }
            />

            <div className="users row">
                {
                    users.map((user) =>
                        <div key={ user.id } className='user card col-lg-4 col-md-6 col-xs-12  mb-4 min-h-100'>
                            <NavLink to={`/profile/${ user.id }` }>
                                <img src={user.photos.large !== null ? user.photos.large : userAvatar} className='card-img-top img-fluid img-thumbnail' alt=""/>
                            </NavLink>
                            <div className="card-body text-center">
                                <h5 className="card-title">{ user.name }</h5>
                                <p className="card-text">{ user.status }</p>
                                <button
                                    disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        !user.followed
                                            ? props.followThunk(user.id)
                                            : props.unFollowThunk(user.id)
                                    }}
                                    className={`btn ${!user.followed ? 'btn-success' : 'btn-danger'}`}
                                >
                                    {!user.followed ? 'Follow' : 'Unfollow'}
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Users;