const ADD_POST = 'ADD_POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST: //ADD POST FOR PROFILE POSTS
            let post = {
                id: 5,
                message: state.newPostText,
                like: 0
            }
            state.posts.push(post);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT: //{type: 'UPDATE_NEW_POST_TEXT', newText: 'text'}
            //NEW POST FOR PROFILE POSTS
            state.newPostText = action.newText;
            return state;
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