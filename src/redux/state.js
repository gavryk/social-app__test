import {renderEntireTree} from "../scss/render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', like: 15},
            {id: 2, message: 'What"s your name?', like: 20},
            {id: 3, message: 'Yo', like: 35},
            {id: 4, message: 'Hello', like: 150},
            {id: 5, message: 'What?', like: 154}
        ],
    },
    messagesPage: {
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
};

export let addPost = (postMessage) => {
    let post = {
        id: 5,
        message: postMessage,
        like: 0
    }

    state.profilePage.posts.push(post);
    renderEntireTree(state);
}

export default state;