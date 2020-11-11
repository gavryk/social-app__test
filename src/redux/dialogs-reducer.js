const ADD_MESSAGE = 'ADD_MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Olena'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Max'},
        {id: 5, name: 'John'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What"s your name?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Hello'},
        {id: 5, message: 'What?'}
    ],
    newMessage: 'New Message'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: //ADD MESSAGE FOR DIALOG PAGE
            let msg = {
                id: 10,
                message: state.newMessage
            }
            return {
                ...state,
                messages: [...state.messages, msg],
                newMessage: '',
            }
        case UPDATE_NEW_MESSAGE_TEXT: //NEW MESSAGE FOR DIALOG PAGE
            return {
                ...state,
                newMessage: action.newMsg
            };
        default:
            return state;
    }
};

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}

export const updateMessageActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMsg: message
    }
}

export default dialogsReducer;