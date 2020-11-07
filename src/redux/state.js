let renderEntireTree;

let state = {
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
    friends: [
        {id: 1, name: 'Andrew', avatar: 'https://mdbootstrap.com/img/Photos/Avatars/img%20%289%29.jpg'},
        {id: 2, name: 'John', avatar: 'https://avatars.sched.co/2/8e/6719467/avatar.jpg?1e3'},
        {id: 3, name: 'Ivan', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmRRejqAbS3aKm2wAr8UqA50YMUwkAJ9Abfg&usqp=CAU'},
        {id: 4, name: 'Jack', avatar: 'https://pickaface.net/gallery/avatar/20151109_144853_2380_sample.png'},
        {id: 5, name: 'Simon', avatar: 'https://leadslive.io/wp-content/uploads/2017/05/Miniclip-8-Ball-Pool-Avatar-11.png'},
        {id: 6, name: 'Lenon', avatar: 'https://lh3.googleusercontent.com/proxy/kS7VBK4QkKexjdmwE_TNRwFwMttLCamh9I86l5Do4By9pRvSHGIwevYSB2kL4ArKYL6mkGOpYgveTTjAhDJNerRgqgE'},
    ]
};


export const addPost = () => {
    let post = {
        id: 5,
        message: state.profilePage.newPostText,
        like: 0
    }
    state.profilePage.posts.push(post);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const addMsg = () => {
    let msg = {
        id: 10,
        message: state.messagesPage.newMessage
    }
    state.messagesPage.messages.push(msg);
    state.messagesPage.newMessage = '';
    renderEntireTree(state);
}

export const updateNewMsgText = (newMsg) => {
    state.messagesPage.newMessage = newMsg;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}


export default state;