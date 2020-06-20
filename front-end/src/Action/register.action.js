import axios from 'axios';

import * as type from '../Constants/type';
import * as url from '../Constants/url';

export const register = () => ({
    type: type.REGISTER
});
export const registerSuccess = () => ({
    type: type.REGISTER_SUCCESS
})
export const registerError = error => ({
    type: type.REGISTER_ERROR,
    error
});

export const doRegister = data => async dispatch => {
    dispatch(register())
    try {
        const res = await axios.post(url.url_register, data);
        if(res && res.status === 201) {
            dispatch(registerSuccess());
        }
    } catch (error) {
        dispatch(registerError(error))
    }

}