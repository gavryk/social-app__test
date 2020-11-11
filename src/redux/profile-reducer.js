const ADD_POST = 'ADD_POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi', like: 15},
        {id: 2, message: 'What"s your name?', like: 20},
        {id: 3, message: 'Yo', like: 35},
        {id: 4, message: 'Hello', like: 150},
        {id: 5, message: 'What?', like: 154}
    ],
    newPostText: 'My Social App'
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
        default:
            return state;
    }
};

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

export default profileReducer;