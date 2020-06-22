import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';


import "./Tab.css"
import * as act from '../../Action/movies.action';
import CardMovie from './CardMovie';

class Tab extends Component {
    state = {
        showing: true,
        upcoming: false,
        // all: true,
        movies: []
    }
    // getAllMovie = () => {
    //     this.setState({
    //         showing: false,
    //         upcoming: false,
    //         all: true
    //     })
    // }
    componentDidMount() {
        const { doGetShowingMovie, doGetUpcomingMovie } = this.props;
        doGetShowingMovie();
    }
    getShowingMovie = () => {
        const { doGetShowingMovie } = this.props;
        doGetShowingMovie();
        this.setState({
            showing: true,
            upcoming: false,
            // all: false,
            // movies: [...showingMovie]
        })
    }
    getUpcomingMovie = () => {
        const { doGetUpcomingMovie } = this.props;
        doGetUpcomingMovie();
        this.setState({
            showing: false,
            upcoming: true,
            // all: false,
            // movies: [...upcomingMovie]
        })
    }
    render() {
        const { showing, upcoming } = this.state;
        const { showingMovie, upcomingMovie, history } = this.props;
        return (
            <>
                <div className="tab">
                    <Container>
                        {/* <CommonSearch /> */}
                        <div className="tab-btn">
                            <i className="fa fa-angle-left"></i>
                            <span className={showing ? "active" : ""} onClick={this.getShowingMovie}>Showing</span>
                            {/* <span className={all ? "active" : ""} onClick={this.getAllMovie}>All</span> */}
                            <span className={upcoming ? "active" : ""} onClick={this.getUpcomingMovie}>Upcoming</span>
                            <i className="fa fa-angle-right"></i>
                        </div>

                    </Container>
                </div>
                <div className="tab-content" style={{paddingTop: "40px"}}>
                    <Container >
                        <Row>
                            {showingMovie.map((movie, index) => {
                                return (
                                    <Col md={3} xs={12} style={{marginBottom: "40px"}} key={index}>
                                        <CardMovie movie={movie} key={index} showDetail={true} history={history}/>
                                    </Col>
                                )
                            })}
                            {upcomingMovie.map((movie, index) => {
                                return (
                                    <Col md={3} xs={12} style={{marginBottom: "40px"}} key={index}>
                                        <CardMovie movie={movie} key={index} showDetail={true} history={history}/>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    showingMovie: state.movies.showingMovie,
    getShowingMovie : state.movies.getShowingMovie,
    getShowingMovieSuccess: state.movies.getShowingMovieSuccess,
    getShowingMovieError: state.getShowingMovieError,

    upcomingMovie: state.movies.upcomingMovie,
    getUpcomingMovie: state.movies.getUpcomingMovie,
    getUpcomingMovieSuccess: state.movies.getUpcomingMovieSuccess,
    getUpcomingMovieError: state.movies.getUpcomingMovieError
})

const mapDispatchToProps = dispatch => ({
    doGetUpcomingMovie: () => {
        dispatch(act.doGetUpcomingMovie())
    },
    doGetShowingMovie: () => {
        dispatch(act.doGetShowingMovie())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Tab)