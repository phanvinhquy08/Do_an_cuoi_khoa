import * as type from '../../Constants/type';

const initialState = {
    Allmovies: [],
    getAllMovie: false,
    getAllMovieSuccess: false,
    getAllMovieError: null,

    showingMovie: [],
    getShowingMovie : false,
    getShowingMovieSuccess: false,
    getShowingMovieError: null,

    upcomingMovie: [],
    getUpcomingMovie: false,
    getUpcomingMovieSuccess: false,
    getUpcomingMovieError: null,

    movie: {},
    getOneMovie: false,
    getOneMovieSuccess: false,
    getOneMovieError: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.GET_ALL_MOVIES:
            return {...state, getAllMovie: true, getAllMovieSuccess: false, getAllMovieError: null}
        case type.GET_ALL_MOVIES_SUCCESS:
            return {...state, getAllMovie: false, Allmovies: action.payload}
        case type.GET_ALL_MOVIES_ERROR:
            return {...state, getAllMovie: false, getAllMovieError: action.payload}

        case type.GET_SHOWING_MOVIES:
            return {...state, getShowingMovie: true, getShowingMovieSuccess: false, getShowingMovieError: null}
        case type.GET_SHOWING_MOVIES_SUCCESS:
            return {...state, getShowingMovie: false, showingMovie: action.payload, upcomingMovie: []}
        case type.GET_SHOWING_MOVIES_ERROR:
            return {...state, getShowingMovie: false, getShowingMovieError: action.payload}

        case type.GET_UPCOMING_MOVIES:
            return {...state, getUpcomingMovie: true, getUpcomingMovieSuccess: false, getUpcomingMovieError: null}
        case type.GET_UPCOMING_MOVIES_SUCCESS:
            return {...state, getUpcomingMovie: false, upcomingMovie: action.payload, showingMovie: []}
        case type.GET_UPCOMING_MOVIES_ERROR:
            return {...state, getUpcomingMovie: false, getUpcomingMovieError: action.payload}

        case type.GET_ONE_MOVIE:
            return {...state, getOneMovie: true, getOneMovieSuccess: false, getOneMovieError: null}
        case type.GET_ONE_MOVIE_SUCCESS:
            return {...state, getOneMovie: false, movie: action.payload}
        case type.GET_ONE_MOVIE_ERROR:
            return {...state, getOneMovie: false, getOneMovieError: action.payload}
        default:
            return state
        }
}