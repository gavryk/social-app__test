import React from "react";
import userAvatar from "../../assets/img/user-avatar.png";
import * as axios from "axios";
import './Users.scss';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUserCount(response.data.totalCount);
                });
    }

    onChangedPage = (page) => {
        this.props.setPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
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
                                    onClick={(e) => { this.onChangedPage(page) }}
                                    className={`page-item ${this.props.currentPage === page ? 'currentPage' : ''}`}>
                                    <span className="page-link">{ page }</span>
                                </li>
                            })}
                        {/*<li className="page-item"><a className="page-link" href="#">Next</a></li>*/}
                    </ul>
                </nav>
                <div className="users row">
                    {
                        this.props.users.map((user) =>
                            <div key={ user.id } className='user card col-lg-4 col-md-6 col-xs-12  mb-4 min-h-100'>
                                <img src={user.photos.small !== null ? user.photos.small : userAvatar} className='card-img-top img-fluid img-thumbnail' alt=""/>
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