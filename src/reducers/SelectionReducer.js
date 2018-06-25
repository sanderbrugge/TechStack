/**
 * default case has to be caught because if a reducer is passed that isn't caught
 * by the switch it'll crash. We return the current state when default.
 * 
 * This however causes an error when it's the init state because the argument will
 * be undefined. That's why we default it to null.
 * 
 * if the reducer is handeling the action, we return it's payload.
 */

export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};