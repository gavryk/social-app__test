import React from "react";
import './Users.scss';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://hansjoerg.me/img/avatar.png',
                followed: false,
                fullName: 'Johny D.',
                status: 'I"m programmer',
                location: {city: 'Lviv', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://pickaface.net/gallery/avatar/unr_example_170317_1328_z0o1v.png',
                followed: false,
                fullName: 'Jack S.',
                status: 'Hi!',
                location: {city: 'London', country: 'UK'}
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8jukJjL_rGWuDa2UBfRwgUDpLhjbeGp7wug&usqp=CAU',
                followed: false,
                fullName: 'Simon H.',
                status: 'Lol',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 4,
                photoUrl: 'https://medicallist.ru/images/myimg/ava2.jpg',
                followed: true,
                fullName: 'Jessica D.',
                status: 'Hello everybody',
                location: {city: 'Berlin', country: 'Germany'}
            },
            {
                id: 5,
                photoUrl: 'https://lh3.googleusercontent.com/proxy/hL0ltqwgD9lyoV2p1f2wuOPdcNeWHTPHhyBURTr9PASDsvVAhMWO_Sx3-8x9cZGvjrVUdKkVdLGAV1J2KLnMPOHbh1kVC36RFqwq76g',
                followed: false,
                fullName: 'Bob M.',
                status: 'I need a job!',
                location: {city: 'New York', country: 'USA'}
            }
        ])
    }

    return (
        <div className='users_wrapper'>
            <h1 className='title pb-2 border-bottom'>Users</h1>

            <div className="users row">
                {
                    props.users.map((user) => {
                        return (
                            <div key={user.id} className='user card col-lg-4 col-md-6 col-xs-12  mb-4 h-100'>
                                <img src={user.photoUrl} className='card-img-top' alt=""/>
                                <div className="card-body text-center">
                                    <h5 className="card-title">{ user.fullName }</h5>
                                    <p className="card-text">{ user.status }</p>
                                    <div className='location'>
                                        <p>{ user.location.country },</p>
                                        <p>{ user.location.city }</p>
                                    </div>
                                    {
                                        !user.followed
                                            ? <button onClick={() => { props.follow(user.id) }} className="btn btn-success">Follow</button>
                                            : <button onClick={() => { props.unFollow(user.id) }} className="btn btn-danger">Unfollow</button>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Users;