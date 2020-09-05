import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap';

import * as act from '../Action/movies.action';
import Loading from '../Components/Common/Loading';
import CardMovie from '../Components/Movies/CardMovie';
import "./MovieDetail.css";
import CommonButton from '../Components/Common/CommonButton';

const converDateToParams = date => {
    return date.split("/").join("-")
}

class MovieDetail extends Component {
    componentDidMount() {
        const { match, doGetOneMovie } = this.props;
        doGetOneMovie(match.params.id)
    }
    render() {
        const { movie, getOneMovie, history } = this.props;
        // console.log(movie.schedules)
        return (
            <div className="movie-detail" style={{
                height: "100vh",
                backgroundImage: `url(${movie.banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                {getOneMovie && <Loading />}
                <div className="movie-detail-blur" />
                <div className="movie-detail-group">
                    <Container>
                        <CardMovie movie={movie} showDetail={false} />
                        <div className="movie-detail-content">
                            <h2>{movie.name}</h2>
                            <ul>
                                <li><span>Time:</span> {movie.time}</li>
                                <li><span>Rate:</span> {movie.rate}</li>
                                <li><span>Genre:</span> {movie.kind}</li>
                                <li><span>Language:</span> {movie.language}</li>
                                <li><span>Storyline:</span> {movie.content}</li>
                                <li>
                                    <span>Shedule show:</span> {movie.schedules && movie.schedules.map((item, index) => {
                                        return (
                                            <CommonButton
                                                children={item.start}
                                                key={index}
                                                style={{ marginRight: "8px" }}
                                                onClick={() => {
                                                    if (localStorage.getItem("token")) {
                                                        history.push(`/booking/${item.movieId}/${converDateToParams(item.date)}/${item.start}`)
                                                    }
                                                    else history.push("/login")
                                                }}
                                            />
                                        )
                                    })}
                                </li>
                            </ul>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    movie: state.movies.movie,
    getOneMovie: state.movies.getOneMovie
})

const mapDispatchToProps = dispatch => ({
    doGetOneMovie: id => {
        dispatch(act.doGetOneMovie(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail)