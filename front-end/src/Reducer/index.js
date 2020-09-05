import { combineReducers } from 'redux';

import about from './About/AboutReducer';
import home from './Home/HomeReducer';
import register from './Register/RegisterReducer';
import login from './Login/LoginReducer';
import news from './News/NewsReducer';
import booking from './Booking/BookingReducer';
import movies from './Movies/MoviesReducer';
import adminMovies from './AdminMovies/AdminMovieReducer';

export default combineReducers({
    home,
    register,
    login,
    about,
    news,
    booking,
    movies,
    adminMovies
})