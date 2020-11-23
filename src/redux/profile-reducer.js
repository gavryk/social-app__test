import {userAPI} from "../api/api";

const ADD_POST = 'ADD_POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT',
    FOCUS_NEW_POST_AREA = 'FOCUS_NEW_POST_AREA',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_FETCHING = 'SET_FETCHING';

let initialState = {
    posts: [
        {id: 1, message: 'Hi', like: 15},
        {id: 2, message: 'What"s your name?', like: 20},
        {id: 3, message: 'Yo', like: 35},
        {id: 4, message: 'Hello', like: 150},
        {id: 5, message: 'What?', like: 154}
    ],
    profile: null,
    newPostText: 'My Social App',
    isFetching: true
};

const profileReducer = (state = initialState, action) => {
    let stateCopy;
    // stateCopy.posts = [...state.posts];
    switch (action.type) {
        case ADD_POST: //ADD POST FOR PROFILE POSTS
            let post = {
                id: 5,
                message: state.newPostText,
                like: 0
            }
            stateCopy = {
                ...state,
                newPostText: '',
                posts: [...state.posts, post]
            }
            return stateCopy;
        case UPDATE_NEW_POST_TEXT: //{type: 'UPDATE_NEW_POST_TEXT', newText: 'text'}
            //NEW POST FOR PROFILE POSTS
            stateCopy = {
                ...state,
                newPostText: action.newText
            }
            return stateCopy;
        case FOCUS_NEW_POST_AREA:
            return {
                ...state,
                newPostText: ''
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
};

//ACTIONS
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updatePostActionCreator = (message) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: message
    }
}
export const onFocusActionCreator = () => {
    return {
        type: FOCUS_NEW_POST_AREA
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export const setFetching = (isFetching) => {
    return {
        type: SET_FETCHING,
        isFetching
    }
}

//THUNK
export const getProfile = (userId) => {
    return(dispatch) => {
        dispatch(setFetching(true));
        userAPI.getProfile(userId)
            .then(response => {
            dispatch(setFetching(false));
            dispatch(setUserProfile(response.data));
        });
    }
}

export default profileReducer;