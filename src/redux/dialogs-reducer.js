const ADD_MESSAGE = 'ADD_MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: //ADD MESSAGE FOR DIALOG PAGE
            let msg = {
                id: 10,
                message: action.newMsg
            }
            return {
                ...state,
                messages: [...state.messages, msg],
            }
        default:
            return state;
    }
};

export const addMessageActionCreator = (msg) => {
    return {
        type: ADD_MESSAGE,
        newMsg: msg
    }
}

export default dialogsReducer;