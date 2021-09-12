import {getAuth} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS',
      CATCH_ERROR = 'CATCH_ERROR';

let initialState = {
    initialized: false,
    globalError: null
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        case CATCH_ERROR:
            return {
                ...state,
                globalError: action.err
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS
    }
}

export const catchError = (err) => {
    return {
        type: CATCH_ERROR,
        err
    }
}

export const initializeApp = () => {
    return(dispatch) => {
        let authPromise = dispatch(getAuth());
        authPromise.then(() => {
            dispatch(initializedSuccess());
        })
    }
}


export default appReducer;