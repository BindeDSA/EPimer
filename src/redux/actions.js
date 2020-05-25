import { INCREMENT_DEPTH, RESET_DEPTH, START_TIMER, STOP_TIMER, RESET_TIMER, ERROR_TRUE, ERROR_FALSE, SWITCH_SHOW_NEXT } from './actionTypes';

export const incrementDepth = () => ({
    type: INCREMENT_DEPTH,
});

export const resetDepth = () => ({
    type: RESET_DEPTH,
});

export const startTimer = () => ({
    type: START_TIMER,
});

export const stopTimer = () => ({
    type: STOP_TIMER,
})

export const resetTimer = () => ({
    type: RESET_TIMER,
})

export const errorTrue = () => ({
    type: ERROR_TRUE,
})

export const errorFalse = () => ({
    type: ERROR_FALSE,
})

export const switchShowNext = () => ({
    type: SWITCH_SHOW_NEXT,
})