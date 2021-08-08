import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
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
                ...action.payload
            }
        default:
            return state;
    }
}


export const setUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: { userId, email, login, isAuth }
    }
}

export const getAuth = () => {
    return(dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data;
                dispatch(setUserData(id, email, login, true));
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return(dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuth());
            } else {
                dispatch(stopSubmit('login', {_error: 'Email Or Password is Wrong!'}));
            }
        })
    }
}

export const logout = () => {
    return(dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false));
            }
        })
    }
}

export default authReducer;