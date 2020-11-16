import userAvatar from "../../assets/img/user-avatar.png";
import React from "react";
import './Users.scss';
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className='users_wrapper'>
            <h1 className='title pb-2 border-bottom'>Users</h1>

            <nav aria-label="page_navigation" className='d-flex justify-content-center p-2'>
                <ul className="pagination">
                    {/*<li className="page-item"><a className="page-link" href="#">Previous</a></li>*/}
                    {pages.map((page) => {
                        return <li
                            key={page}
                            onClick={(e) => { props.onChangedPage(page) }}
                            className={`page-item ${props.currentPage === page ? 'currentPage' : ''}`}>
                            <span className="page-link">{ page }</span>
                        </li>
                    })}
                    {/*<li className="page-item"><a className="page-link" href="#">Next</a></li>*/}
                </ul>
            </nav>
            <div className="users row">
                {
                    props.users.map((user) =>
                        <div key={ user.id } className='user card col-lg-4 col-md-6 col-xs-12  mb-4 min-h-100'>
                            <NavLink to={ '/profile/' + user.id }>
                                <img src={user.photos.small !== null ? user.photos.small : userAvatar} className='card-img-top img-fluid img-thumbnail' alt=""/>
                            </NavLink>
                            <div className="card-body text-center">
                                <h5 className="card-title">{ user.name }</h5>
                                <p className="card-text">{ user.status }</p>
                                <button
                                    onClick={() => { props.toggleFollow(user.id) }}
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

export default Users;