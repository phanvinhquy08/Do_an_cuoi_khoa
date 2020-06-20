import axios from 'axios';

import * as type from '../Constants/type';
import * as url from '../Constants/url';

export const login = () => ({
    type: type.LOGIN
});
export const loginSuccess = () => ({
    type: type.LOGIN_SUCCESS
})
export const loginError = error => ({
    type: type.LOGIN_ERROR,
    error
});
export const currentAccount = account => ({
    type: type.CURRENT_ACCOUNT,
    account
})
export const doLogin = account => async dispatch => {
    dispatch(login())
    try {
        const res = await axios.post(url.url_login, account);
        if(res && res.status === 200) {
            dispatch(loginSuccess());
            dispatch(currentAccount(account))
            localStorage.setItem("token", res.data.accessToken)
            localStorage.setItem("currentAccount", JSON.stringify(account))
            
        }
    } catch (error) {
        dispatch(loginError(error))
    }

}