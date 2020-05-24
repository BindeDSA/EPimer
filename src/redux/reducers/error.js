const errorReducer = (state = false, action) => {
    switch (action.type) {
        case 'ERROR_FALSE':
            return false;
        case 'ERROR_TRUE':
            return true;
        default:
            return false;
    }
}

export default errorReducer;