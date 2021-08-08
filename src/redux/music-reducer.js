import {getMusic} from "../api/api";

const SET_MUSIC = 'SET_MUSIC',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    musics: [],
    isFetching: true,
}

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MUSIC:
            return {
                ...state,
                musics: action.musics
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}


//ACTIONS
export const setMusic = (musics) => {
    return {
        type: SET_MUSIC,
        musics
    }
}
export const setIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

//THUNK
export const getMusicThunk = () => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        getMusic(6, '*')
            .then(data => {
                dispatch(setIsFetching(false));
                let musics = data.data;
                dispatch(setMusic(musics));
            })
    }
}
export const getMusicSearch = (artistName) => {
    return(dispatch) => {
        dispatch(setIsFetching(true));
        getMusic(6, artistName)
            .then(data => {
                dispatch(setIsFetching(false));
                let musics = data.data;
                dispatch(setMusic(musics));
            })
    }
}

export default musicReducer;