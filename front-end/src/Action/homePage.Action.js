import * as type from '../Constants/type';
import * as url from '../Constants/url';
import axios from 'axios';


export const getMovieBySchedule = () => ({
    type: type.GET_MOVIE_BY_SCHEDULE
})
export const getMovieByScheduleSuccess = Schedules => ({
    type: type.GET_MOVIE_BY_SCHEDULE_SUCCESS,
    payload: Schedules
})
export const getMovieByScheduleError = error => ({
    type: type.GET_MOVIE_BY_SCHEDULE_ERROR,
    payload: error
})
export const doGetMovieBySchedule = date => async dispatch => {
    dispatch(getMovieBySchedule());
    try {
        const res = await axios.get(url.url_schedules + `?date=${date}&_expand=movie`);
        if(res && res.status === 200) {
            dispatch(getMovieByScheduleSuccess(res.data))
        }
    } catch (error) {
        dispatch(getMovieByScheduleError(error))
    }
}