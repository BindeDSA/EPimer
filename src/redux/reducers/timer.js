const timerReducer = (state = {}, action) => {
    switch (action.type) {
        case 'START_TIMER':
            return { start: Date.now(), stop: undefined, running: true };
        case 'STOP_TIMER':
            return { start: state.start, stop: state.running ? Date.now() : state.stop, running: false };
        case 'RESET_TIMER':
            return { start: undefined, stop: undefined, running: false }
        default:
            return state;
    }
};

export default timerReducer;