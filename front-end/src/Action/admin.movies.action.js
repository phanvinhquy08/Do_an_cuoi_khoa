import axios from 'axios';

import * as type from '../Constants/type';
import * as url from '../Constants/url';

export const getAllMovies = () => ({
    type: type.GET_MOVIE_ADMIN
})
export const getAllMoviesSuccess = movies => ({
    type: type.GET_MOVIE_ADMIN_SUCCESS,
    payload: movies
})
export const getAllMoviesError = error => ({
    type: type.GET_MOVIE_ADMIN_ERROR,
    payload: error
})
export const doGetAllMovies = () => async dispatch => {
    dispatch(getAllMovies());
    try {
        const res = await axios.get(url.url_movies);
        if(res && res.status === 200) {
            dispatch(getAllMoviesSuccess(res.data))
        }
    } catch (error) {
        dispatch(getAllMoviesError(error))
    }
}
export const getAllSchedule = () => ({
    type: type.GET_SCHEDULE_ADMIN
})
export const getAllScheduleSuccess = schedules => ({
    type: type.GET_SCHEDULE_ADMIN_SUCCESS,
    payload: schedules
})
export const getAllScheduleError = error => ({
    type: type.GET_SCHEDULE_ADMIN_ERROR,
    payload: error
})
export const doGetAllSchedules = () => async dispatch => {
    dispatch(getAllSchedule());
    try {
        const res = await axios.get(url.url_schedules);
        if(res && res.status === 200) {
            dispatch(getAllScheduleSuccess(res.data))
        }
    } catch (error) {
        dispatch(getAllScheduleError(error))
    }
}

export const getAllUsers = () => ({
    type: type.GET_ALL_USER
})
export const getAllUsersSuccess = user => ({
    type: type.GET_ALL_USER_SUCCESS, 
    payload: user
})
export const getAllUsersError = error => ({
    type: type.GET_ALL_USER_ERROR,
    payload: error
})
export const doGetAllUsers = () => async dispatch => {
    dispatch(getAllUsers());
    try {
        const res = await axios.get(url.url_users);
        if(res && res.status === 200) {
            dispatch(getAllUsersSuccess(res.data))
        }
    } catch (error) {
        dispatch(getAllUsersError(error))
    }
}