import depthReducer from './depth'
import timerReducer from './timer'
import errorReducer from './error'
import settingsReducer from './settings'
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    depth: depthReducer,
    timer: timerReducer,
    error: errorReducer,
    settings: settingsReducer,
})

export default rootReducers;