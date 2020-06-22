import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container } from 'reactstrap';


import * as act from '../Action/movies.action';
import CardMovie from '../Components/Movies/CardMovie';
import CarouselMovie from '../Components/Movies/Carousel';
import Tab from '../Components/Movies/Tab';
import Loading from '../Components/Common/Loading';
import "./Movies.css"

class Movies extends Component {
    componentDidMount() {
        this.props.doGetAllMovie();
    }
    render() {
        const { Allmovies, getAllMovie, history } = this.props;
        return (
            <>
                {getAllMovie && <Loading />}
                <div className="movies">
                    <CarouselMovie movies={Allmovies} history={history} />
                    <Tab history={history}/>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    Allmovies: state.movies.Allmovies,
    getAllMovie: state.movies.getAllMovie,
    getAllMovieSuccess: state.movies.getAllMovieSuccess,
})

const mapDispatchToProps = dispatch => ({
    doGetAllMovie: () => {
        dispatch(act.doGetAllMovie())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Movies)