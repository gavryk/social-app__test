import {loadTheme} from "../api/localStorage";

const TOGGLE_THEME = 'TOGGLE_THEME';

let initialState = {
    themeDark: loadTheme()
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                themeDark: !state.themeDark
            }
        default:
            return state;
    }
}

export const toggleAppTheme = () => {
    return {
        type: TOGGLE_THEME
    }
}


export default settingsReducer;