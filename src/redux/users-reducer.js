let FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {id: 1, photoUrl: 'https://hansjoerg.me/img/avatar.png', followed: false, fullName: 'Johny D.', status: 'I"m programmer', location: { city: 'Lviv', country: 'Ukraine' }},
        // {id: 2, photoUrl: 'https://pickaface.net/gallery/avatar/unr_example_170317_1328_z0o1v.png', followed: false, fullName: 'Jack S.', status: 'Hi!', location: { city: 'London', country: 'UK' }},
        // {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8jukJjL_rGWuDa2UBfRwgUDpLhjbeGp7wug&usqp=CAU', followed: false, fullName: 'Simon H.', status: 'Lol', location: { city: 'Moscow', country: 'Russia' }},
        // {id: 4, photoUrl: 'https://medicallist.ru/images/myimg/ava2.jpg', followed: true, fullName: 'Jessica D.', status: 'Hello everybody', location: { city: 'Berlin', country: 'Germany'}},
        // {id: 5, photoUrl: 'https://lh3.googleusercontent.com/proxy/hL0ltqwgD9lyoV2p1f2wuOPdcNeWHTPHhyBURTr9PASDsvVAhMWO_Sx3-8x9cZGvjrVUdKkVdLGAV1J2KLnMPOHbh1kVC36RFqwq76g', followed: false, fullName: 'Bob M.', status: 'I need a job!', location: { city: 'New York', country: 'USA'}}
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export default usersReducer;