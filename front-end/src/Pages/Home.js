import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import Carousel from '../Components/Home/Carousel3';
// import Tab from '../Components/Home/Tab';
import * as act from '../Action/homePage.action';
import "./Home.css"
import CommonButton from '../Components/Common/CommonButton';
import Tab from '../Components/Home/Tab';
class Home extends Component {

    render() {
        const { moviesBySchedule, doGetMovieBySchedule, history } = this.props;
        return (
            <div className="home">
                <Carousel 
                    history={history}
                />
                <Tab 
                    doGetMovieBySchedule={doGetMovieBySchedule}
                    moviesBySchedule={moviesBySchedule}
                    history={history}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    moviesBySchedule: state.home.moviesBySchedule
})

const mapDispatchToProps = dispatch => ({
    doGetMovieBySchedule: date => {
        dispatch(act.doGetMovieBySchedule(date))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)