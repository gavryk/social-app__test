import  userAvatar from '../img/user-avatar.png'

let initialState = {
    friends: [
        {id: 1, name: 'Andrew', avatar: 'https://mdbootstrap.com/img/Photos/Avatars/img%20%289%29.jpg'},
        {id: 2, name: 'John', avatar: 'https://avatars.sched.co/2/8e/6719467/avatar.jpg?1e3'},
        {id: 3, name: 'Ivan', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmRRejqAbS3aKm2wAr8UqA50YMUwkAJ9Abfg&usqp=CAU'},
        {id: 4, name: 'Jack', avatar: 'https://pickaface.net/gallery/avatar/20151109_144853_2380_sample.png'},
        {id: 5, name: 'Simon', avatar: 'https://leadslive.io/wp-content/uploads/2017/05/Miniclip-8-Ball-Pool-Avatar-11.png'},
        {id: 6, name: 'Lenon', avatar: userAvatar},
    ]
}

const friendsReducer = (state = initialState, action) => {


    return state;
}

export default friendsReducer;