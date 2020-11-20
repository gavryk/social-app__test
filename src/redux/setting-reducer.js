const TOGGLE_THEME = 'TOGGLE_THEME';

let initialState = {
    themeDark: new Date().getHours() >= 6 && new Date().getHours() <= 20 ? false : true
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

export const toggleAppTheme = (themeOpt) => {
    return {
        type: TOGGLE_THEME,
        themeOpt
    }
}

export default settingsReducer;