import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', like: 15},
                {id: 2, message: 'What"s your name?', like: 20},
                {id: 3, message: 'Yo', like: 35},
                {id: 4, message: 'Hello', like: 150},
                {id: 5, message: 'What?', like: 154}
            ],
            newPostText: 'My Social App'
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
            ],
            newMessage: 'New Message'
        },
        friendsPage: {
            friends: [
                {id: 1, name: 'Andrew', avatar: 'https://mdbootstrap.com/img/Photos/Avatars/img%20%289%29.jpg'},
                {id: 2, name: 'John', avatar: 'https://avatars.sched.co/2/8e/6719467/avatar.jpg?1e3'},
                {id: 3, name: 'Ivan', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmRRejqAbS3aKm2wAr8UqA50YMUwkAJ9Abfg&usqp=CAU'},
                {id: 4, name: 'Jack', avatar: 'https://pickaface.net/gallery/avatar/20151109_144853_2380_sample.png'},
                {id: 5, name: 'Simon', avatar: 'https://leadslive.io/wp-content/uploads/2017/05/Miniclip-8-Ball-Pool-Avatar-11.png'},
                {id: 6, name: 'Lenon', avatar: 'https://lh3.googleusercontent.com/proxy/OWapOERtgOdpI7ItskKDqh0DSqk2cc-tJtRu4iR84z3vz8tRgancVCu8GnZd4heBS7YgC2NLEsZMyglIKVH4kzO71dk'},
            ]
        }
    },
    _callSubscriber() {
        console.log(this._state);
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // { type: 'ADD_POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
//OOP - Store