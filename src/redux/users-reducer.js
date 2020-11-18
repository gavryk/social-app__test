import {userAPI} from "../api/api";

const SET_USERS = 'SET_USERS',
    TOGGLE_FOLLOW = 'TOGGLE_FOLLOW',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_COUNT = 'SET_TOTAL_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [
        // {id: 1, photoUrl: 'https://hansjoerg.me/img/avatar.png', followed: false, fullName: 'Johny D.', status: 'I"m programmer', location: { city: 'Lviv', country: 'Ukraine' }},
        // {id: 2, photoUrl: 'https://pickaface.net/gallery/avatar/unr_example_170317_1328_z0o1v.png', followed: false, fullName: 'Jack S.', status: 'Hi!', location: { city: 'London', country: 'UK' }},
        // {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8jukJjL_rGWuDa2UBfRwgUDpLhjbeGp7wug&usqp=CAU', followed: false, fullName: 'Simon H.', status: 'Lol', location: { city: 'Moscow', country: 'Russia' }},
        // {id: 4, photoUrl: 'https://medicallist.ru/images/myimg/ava2.jpg', followed: true, fullName: 'Jessica D.', status: 'Hello everybody', location: { city: 'Berlin', country: 'Germany'}},
        // {id: 5, photoUrl: 'https://lh3.googleusercontent.com/proxy/hL0ltqwgD9lyoV2p1f2wuOPdcNeWHTPHhyBURTr9PASDsvVAhMWO_Sx3-8x9cZGvjrVUdKkVdLGAV1J2KLnMPOHbh1kVC36RFqwq76g', followed: false, fullName: 'Bob M.', status: 'I need a job!', location: { city: 'New York', country: 'USA'}}
    ],
    pageSize: 12,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) {
                        return {...user, followed: !user.followed }
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUserCount: action.total
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

//ACTIONS CREATORS
export const toggleFollow = (userId) => {
    return {
        type: TOGGLE_FOLLOW,
        userId
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}
export const setTotalUserCount = (total) => {
    return {
        type: SET_TOTAL_COUNT,
        total
    }
}
export const setIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

//THUNK
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(setIsFetching(true));

        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUserCount(data.totalCount));
            });
    }
}

export default usersReducer;