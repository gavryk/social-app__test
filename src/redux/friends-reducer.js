import  userAvatar from '../assets/img/user-avatar.png'
import {userAPI} from "../api/api";
import {setIsFetching} from "./users-reducer";
let SET_FRIENDS = 'SET_FRIENDS',
    SET_CURRENT_FRIENDS_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_COUNT';

let initialState = {
    friends: [
        {id: 1, name: 'Andrew', photos: 'https://mdbootstrap.com/img/Photos/Avatars/img%20%289%29.jpg'},
        {id: 2, name: 'John', photos: 'https://avatars.sched.co/2/8e/6719467/avatar.jpg?1e3'},
        {id: 3, name: 'Ivan', photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmRRejqAbS3aKm2wAr8UqA50YMUwkAJ9Abfg&usqp=CAU'},
        {id: 4, name: 'Jack', photos: 'https://pickaface.net/gallery/avatar/20151109_144853_2380_sample.png'},
        {id: 5, name: 'Simon', photos: 'https://leadslive.io/wp-content/uploads/2017/05/Miniclip-8-Ball-Pool-Avatar-11.png'},
        {id: 7, name: 'Lenon', photos: userAvatar},
        {id: 8, name: 'Jesica', photos: 'https://mediaprofi.kz/wp-content/uploads/2018/06/user-avatar-1.png'},
        {id: 9, name: 'Alice', photos: 'https://www.fumagro.ru/sites/default/files/testimonial/avatar-3.jpg'},
        {id: 10, name: 'Bob', photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMizONQq0jJoWGdunAjkCRbVV7yj_q1rl6QA&usqp=CAU'},
    ],
    isFetching: true,
    pageSize: 15,
    totalUserCount: 0,
    currentPage: 1,
}

const friendsReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_FRIENDS: {
            return {
                ...state,
                friends: action.friends
            }
        }
        case SET_CURRENT_FRIENDS_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_FRIENDS_COUNT:
            return {
                ...state,
                totalUserCount: action.total
            }
        default:
            return state
    }
}

export const setFriends = (friends) => {
    return {
        type: SET_FRIENDS,
        friends
    }
}

export const setFriendsPage = (page) => {
    return {
        type: SET_CURRENT_FRIENDS_PAGE,
        page
    }
}
export const setTotalFriendsCount = (total) => {
    return {
        type: SET_TOTAL_FRIENDS_COUNT,
        total
    }
}

//THUNK For SetFriends
export const getFriends = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setFriendsPage(currentPage));

        let data = await userAPI.getFriends(currentPage, pageSize);

        dispatch(setIsFetching(false));
        dispatch(setFriends(data.items));
        dispatch(setTotalFriendsCount(data.totalCount));
    }
}

export default friendsReducer;