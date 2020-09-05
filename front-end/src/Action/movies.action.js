import axios from 'axios';

import * as type from '../Constants/type';
import * as url from '../Constants/url';

// get all movie
export const getAllMovie = () => ({
    type: type.GET_ALL_MOVIES
})
export const getAllMovieSuccess = movies => ({
    type: type.GET_ALL_MOVIES_SUCCESS,
    payload: movies
})
export const getAllMovieError = error => ({
    type: type.GET_ALL_MOVIES_ERROR,
    payload: error
})
export const doGetAllMovie = () => async dispatch => {
    dispatch(getAllMovie());
    try {
        const res = await axios.get(url.url_movies);
        if(res && res.status === 200) {
            dispatch(getAllMovieSuccess(res.data))
        }
    } catch (error) {
        dispatch(getAllMovieError(error))
    }
}
// get showing movie
export const getShowingMovie = () => ({
    type: type.GET_SHOWING_MOVIES
})
export const getShowingMovieSuccess = movies => ({
    type: type.GET_SHOWING_MOVIES_SUCCESS,
    payload: movies
})
export const getShowingMovieError = error => ({
    type: type.GET_SHOWING_MOVIES_ERROR,
    payload: error
})
export const doGetShowingMovie = () => async dispatch => {
    dispatch(getShowingMovie());
    try {
        const res = await axios.get(url.url_movies + "?playing=true");
        if(res && res.status === 200) {
            dispatch(getShowingMovieSuccess(res.data))
        }
    } catch (error) {
        dispatch(getShowingMovieError(error))
    }
}
// get upcoming movie
export const getUpcomingMovie = () => ({
    type: type.GET_UPCOMING_MOVIES
})
export const getUpcomingMovieSuccess = movies => ({
    type: type.GET_UPCOMING_MOVIES_SUCCESS,
    payload: movies
})
export const getUpcomingMovieError = error => ({
    type: type.GET_UPCOMING_MOVIES_ERROR,
    payload: error
})
export const doGetUpcomingMovie = () => async dispatch => {
    dispatch(getUpcomingMovie());
    try {
        const res = await axios.get(url.url_movies + "?playing=false");
        if(res && res.status === 200) {
            dispatch(getUpcomingMovieSuccess(res.data))
        }
    } catch (error) {
        dispatch(getUpcomingMovieError(error))
    }
}
// get one movie
export const getOneMovie = () => ({
    type: type.GET_ONE_MOVIE
})
export const getOneMovieSuccess = movie => ({
    type: type.GET_ONE_MOVIE_SUCCESS,
    payload: movie
})
export const getOneMovieError = error => ({
    type: type.GET_ONE_MOVIE_ERROR,
    payload: error
})
export const doGetOneMovie = id => async dispatch => {
    dispatch(getOneMovie());
    try {
        const res = await axios.get(url.url_movies + "/" + id + "?_embed=schedules");
        if(res && res.status === 200) {
            dispatch(getOneMovieSuccess(res.data))
        }
    } catch (error) {
        dispatch(getOneMovieError(error))
    }
}