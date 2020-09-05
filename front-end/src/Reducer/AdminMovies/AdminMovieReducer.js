import * as type from '../../Constants/type';

const initialState = {
    Allmovies: [],
    getAllMovie: false,
    getAllMovieSuccess: false,
    getAllMovieError: null,

    schedules: [],
    getAllSchedule: false,
    getAllScheduleSuccess: false,
    getAllScheduleError: null,

    users: [],
    getAllUsers: false,
    getAllUsersSuccess: false,
    getAllUsersError: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.GET_MOVIE_ADMIN:
            return {...state, getAllMovie: true, getAllMovieSuccess: false, getAllMovieError: null}
        case type.GET_MOVIE_ADMIN_SUCCESS:
            return {...state, getAllMovie: false, Allmovies: action.payload, getAllMovieSuccess: true}
        case type.GET_MOVIE_ADMIN_ERROR:
            return {...state, getAllMovie: false, getAllMovieError: action.payload}
        case type.GET_SCHEDULE_ADMIN:
            return {...state, getAllSchedule: true, getAllScheduleSuccess: false, getAllScheduleError: null}
        case type.GET_SCHEDULE_ADMIN_SUCCESS:
            return {...state, getAllSchedule: false, schedules: action.payload, getAllScheduleSuccess: true}
        case type.GET_SCHEDULE_ADMIN_ERROR:
            return {...state, getAllSchedule: false, getAllScheduleError: action.payload}
        case type.GET_ALL_USER:
            return {...state, getAllUsers: true, getAllUsersSuccess: false, getAllUsersError: null}
        case type.GET_ALL_USER_SUCCESS:
            return {...state, getAllUsers: false, users: action.payload, getAllUsersSuccess: true}
        case type.GET_ALL_USER_ERROR:
            return {...state, getAllUsers: false, getAllUsersError: action.payload}

        default:
            return state
        }
}