import * as type from '../../Constants/type';

const currentAccount = JSON.parse(localStorage.getItem("currentAccount"))  || null;
const initialState = {
    login: false,
    loginSuccess: false,
    loginError: null,
    currentAccount
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.LOGIN:
            return {...state, login: true, loginSuccess: false, loginError: null}
        case type.LOGIN_SUCCESS: 
            return {...state, login: false, loginSuccess: true}
        case type.LOGIN_ERROR:
            return {...state, login: false, loginError: action.error}
        case type.CURRENT_ACCOUNT:
            return {...state, currentAccount: action.account}
        default:
            return state
        }
}