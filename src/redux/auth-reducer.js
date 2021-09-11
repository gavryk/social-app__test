import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
const SET_USER_DATA = 'SET_USER_DATA',
      GET_CAPTCHA = 'GET_CAPTCHA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA:
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

export const setCaptcha = (captchaUrl) => {
    return {
        type: GET_CAPTCHA,
        payload: { captchaUrl }
    }
}


export const getAuth = () => {
    return async (dispatch) => {
        let response = await authAPI.me();
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data;
            dispatch(setUserData(id, email, login, true));
        }
    }
}

export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha);

        if (response.data.resultCode === 0) {
            dispatch(getAuth());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            let errormsg = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error!'
            dispatch(stopSubmit('login', {_error: errormsg}))
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch) => {
        let response = await securityAPI.getCaptcha();
        const captchaUrl = response.data.url;

        dispatch(setCaptcha(captchaUrl));
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();

        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false));
        }
    }
}

export default authReducer;