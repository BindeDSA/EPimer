import depthReducer from './depth'
import timerReducer from './timer'
import errorReducer from './error'
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    depth: depthReducer,
    timer: timerReducer,
    error: errorReducer,
})

export default rootReducers;