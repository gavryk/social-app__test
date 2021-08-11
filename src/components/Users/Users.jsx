import userAvatar from "../../assets/img/user-avatar.png";
import React from "react";
import './Users.scss';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Users = (props) => {
    //Search Product Hook
    let [searchValue, setSearchValue] = React.useState('');

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

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

            <nav aria-label="page_navigation" className='d-flex justify-content-center p-2'>
                <ul className="pagination">
                    {/*<li className="page-item"><a className="page-link" href="#">Previous</a></li>*/}
                    {pages.map((page) => {
                        return <li
                            key={page}
                            onClick={(e) => { props.onChangedPage(page) }}
                            className={`page-item ${props.currentPage === page ? 'currentPage' : ''}`}>
                            <span className={`${props.currentPage === page ? 'text-white' : ''}  page-link`}>{ page }</span>
                        </li>
                    })}
                    {/*<li className="page-item"><a className="page-link" href="#">Next</a></li>*/}
                </ul>
            </nav>
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