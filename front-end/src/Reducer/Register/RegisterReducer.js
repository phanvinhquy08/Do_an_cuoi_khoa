import * as type from '../../Constants/type';

const initialState = {
    register: false,
    registerSuccess: false,
    registerError: null,
    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.REGISTER:
            return {...state, register: true, registerSuccess: false, registerError: null}
        case type.REGISTER_SUCCESS: 
            return {...state, register: false, registerSuccess: true}
        case type.REGISTER_ERROR:
            return {...state, register: false, registerError: action.error}
        default:
            return state
        }
}