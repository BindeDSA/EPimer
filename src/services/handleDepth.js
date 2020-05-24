import GetDigit from './getDigit';
import { incrementDepth, resetDepth, startTimer, stopTimer, resetTimer, errorTrue, errorFalse } from '../redux/actions'

class HandleDepth {
    store;

    constructor(store) {
        console.log(store)
        this.store = store;
        document.addEventListener('keypress', this.keyPressCheck);
    }

    keyPressCheck = (keyPress) => {
        console.log(keyPress)
        const state = this.store.getState();
        if (keyPress.key === GetDigit.getDigits(state.depth)) {
            this.store.dispatch(incrementDepth());
            this.store.dispatch(errorFalse())
            if (state.depth === 0) {
                this.store.dispatch(startTimer())
            }
        } else if (!isNaN(keyPress.key)) {
            this.store.dispatch(errorTrue())
        }

        if (keyPress.key === ' ') {
            if (state.timer.running) {
                this.store.dispatch(stopTimer())
            } else {
                this.store.dispatch(resetDepth())
            }
        }

        if (keyPress.key === 'r') {
            this.store.dispatch(resetDepth())
            this.store.dispatch(resetTimer())
        }
    }
}


export default HandleDepth;