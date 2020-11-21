export const loadTheme = () => {
    try {
        const settingState = localStorage.getItem('app-theme');
        if (settingState === null) {
            return undefined;
        }
        return JSON.parse(settingState)
    } catch (err) {
        return undefined;
    }
}

export const saveTheme = (state) => {
    try {
        const settingState = JSON.stringify(state)
        localStorage.setItem('app-theme', settingState)
    } catch (err) {
        //Ignore write errors.
    }
}