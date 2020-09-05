import React from 'react';

import Home from '../Pages/Home';// import component
import Movies from '../Pages/Movies';
import MovieDetail from '../Pages/MovieDetail';
import About from '../Pages/About';
import Booking from '../Pages/Booking';
import News from '../Pages/News';
import NewsDetail from '../Pages/NewsDetail';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import RegisterSuccess from '../Pages/RegisterSuccess';
import AdminMovies from '../Pages/Admin.Movies';

const routers = [
    {
        path: "/about",
        component: (props) => <About {...props}/>
    },
    {
        path: "/news",
        component: (props) => <News {...props}/>
    },
    {
        path: "/news/:id",
        component: (props) => <NewsDetail {...props}/>
    },
    {
        path: "/movies",
        component: (props) => <Movies {...props}/>
    },
    {
        path: "/movies/:id",
        component: (props) => <MovieDetail {...props}/>
    },
    {
        path: "/booking/:id/:date/:start",
        component: (props) => <Booking {...props}/>
    },
    {
        path: "/register",
        component: (props) => <Register {...props}/>
    },
    {
        path: "/register/success",
        component: (props) => <RegisterSuccess {...props}/>
    },
    {
        path: "/login",
        component: (props) => <Login {...props}/>
    },
    {
        path: "/admin/movies",
        component: (props) => <AdminMovies {...props}/>
    },
    {
        path: "/",
        component: (props) => <Home {...props}/>  
    },
]

export default routers