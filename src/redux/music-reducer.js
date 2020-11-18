const SET_MUSIC = 'SET_MUSIC',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    UPDATE_ARTIST_SEARCH = 'UPDATE_ARTIST_SEARCH';

let initialState = {
    musics: [],
    isFetching: true,
    searchText: '',
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
        case UPDATE_ARTIST_SEARCH:
            return {
                ...state,
                searchText: action.newArtist
            }
        default:
            return state;
    }
}



export const setMusic = (musics) => {
    return {
        type: SET_MUSIC,
        musics
    }
}

export const artistSearchText = (newArtist) => {
    return {
        type: UPDATE_ARTIST_SEARCH,
        newArtist
    }
}

export const setIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export default musicReducer;