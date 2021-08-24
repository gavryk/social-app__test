import React from "react";
import './Users.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

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
                        <User
                            key={ user.id }
                            id={ user.id }
                            photos={ user.photos }
                            name={ user.name }
                            status={ user.status }
                            followed={ user.followed }
                            followingInProgress={ props.followingInProgress }
                            followThunk={ props.followThunk }
                            unFollowThunk={ props.unFollowThunk }
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Users;