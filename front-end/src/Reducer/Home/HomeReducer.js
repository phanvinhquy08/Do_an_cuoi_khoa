import * as type from '../../Constants/type';

const initialState = {
    moviesBySchedule: [],
    getMovieBySchedule: false,
    getMovieByScheduleSuccess: false,
    getMovieByScheduleError: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.GET_MOVIE_BY_SCHEDULE:
            return {...state, getMovieBySchedule: true, getMovieByScheduleSuccess: false, getMovieByScheduleError: null}
        case type.GET_MOVIE_BY_SCHEDULE_SUCCESS:
            return {...state, getMovieBySchedule: false, getMovieByScheduleSuccess: true, moviesBySchedule: action.payload}
        case type.GET_MOVIE_BY_SCHEDULE_ERROR:
            return {...state, getMovieBySchedule: false, getMovieByScheduleError: action.payload}
        default:
            return state
        }
}
