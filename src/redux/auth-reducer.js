import {authAPI} from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}


export const setUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: { userId, email, login }
    }
}

export const getAuth = () => {
    return(dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setUserData(id, email, login));
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return(dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {

            }
        })
    }
}

export default authReducer;