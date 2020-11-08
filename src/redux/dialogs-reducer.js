const ADD_MESSAGE = 'ADD_MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE: //ADD MESSAGE FOR DIALOG PAGE
            let msg = {
                id: 10,
                message: state.newMessage
            }
            state.messages.push(msg);
            state.newMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT: //NEW MESSAGE FOR DIALOG PAGE
            state.newMessage = action.newMsg;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateMessageActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMsg: message
    }
}

export default dialogsReducer;