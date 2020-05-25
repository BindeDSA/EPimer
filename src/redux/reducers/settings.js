const settingsReducer = (state = { showNext: false }, action) => {
    switch (action.type) {
        case 'SWITCH_SHOW_NEXT':
            return { ...state, showNext: !state.showNext };
        default:
            return state;
    }
}

export default settingsReducer;