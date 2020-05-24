const depthReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT_DEPTH':
            return state+1;
        case 'RESET_DEPTH':
            return 0;
        default:
            return state;
    }
}

export default depthReducer