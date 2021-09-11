import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD_POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_FETCHING = 'SET_FETCHING',
    SET_STATUS = 'SET_STATUS',
    DELETE_POST = 'DELETE_POST',
    SET_PHOTO = 'SET_PHOTO';

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
    isFetching: true,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    let stateCopy;
    // stateCopy.posts = [...state.posts];
    switch (action.type) {
        case ADD_POST: //ADD POST FOR PROFILE POSTS
            let post = {
                id: 5,
                message: action.newPost,
                like: 0
            }
            stateCopy = {
                ...state,
                posts: [...state.posts, post]
            }
            return stateCopy;
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.id)
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
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
        default:
            return state;
    }
};

//ACTIONS
export const addPostActionCreator = (post) => {
    return {
        type: ADD_POST,
        newPost: post
    }
}

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        id
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

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}
export const setPhoto = (photos) => {
    return {
        type: SET_PHOTO,
        photos
    }
}

//THUNK
export const getProfile = (userId) => {
    return async (dispatch) => {
        dispatch(setFetching(true));
        let response = await userAPI.getProfile(userId);
        dispatch(setFetching(false));
        dispatch(setUserProfile(response.data));
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);

        dispatch(setStatus(response.data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);

        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export const saveAvatar = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file);

        if(response.data.resultCode === 0) {
            dispatch(setPhoto(response.data.data.photos));
        }
    }
}

export const saveProfile = (profile) => {
    return async (dispatch, getState) => {
        const id = getState().auth.userId;
        let response = await profileAPI.saveProfile(profile);

        if(response.data.resultCode === 0) {
            dispatch(getProfile(id));
        }
    }
}


export default profileReducer;