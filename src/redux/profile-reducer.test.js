import profileReducer, {addPostActionCreator} from "./profile-reducer";


it('length of posts should be increment', () => {
    //1. test data
    let action = addPostActionCreator('Test Post');
    let state = {
        posts: [
            {id: 1, message: 'Hi', like: 15},
            {id: 2, message: 'What"s your name?', like: 20},
            {id: 3, message: 'Yo', like: 35},
            {id: 4, message: 'Hello', like: 150},
            {id: 5, message: 'What?', like: 154}
        ]
    }

    //2.Action
    let newState = profileReducer(state, action);

    //3.expectation
    expect(newState.posts.length).toBe(6);
})