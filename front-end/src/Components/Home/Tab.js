import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'

import "./Tab.css";
import CommonButton from '../Common/CommonButton';

const converDateToParams = date => {
    return date.split("/").join("-")
}

class Tab extends Component {
    state = {
        active: "7/11/2020",
        movies: []
    }
    componentDidMount() {
        this.props.doGetMovieBySchedule("7/11/2020");
    }
    getDayByNumber = num => {
        switch (num) {
            case 0:
                return "7/12/2020"
            case 1:
                return "7/13/2020"
            case 2:
                return "7/14/2020"
            case 3:
                return "7/15/2020"
            case 4:
                return "7/16/2020"
            case 5:
                return "7/17/2020"
            case 6:
                return "7/11/2020"
            default:
                return null
        }
    }
    onClickTab = e => {
        let { doGetMovieBySchedule } = this.props;
        doGetMovieBySchedule(this.getDayByNumber(e.target.value))
        this.setState({active: this.getDayByNumber(e.target.value)})
    }
    renderMovies = () => {
        const { moviesBySchedule } = this.props;
        let group1 = moviesBySchedule.reduce((r, a) => {
            r[a.movieId] = [...r[a.movieId] || [], a];
            return r;
        }, {});
        let group2 = [];
        for(let key in group1) {
            let result = group1[key].reduce((r, i) => {
                return {...r,start: [...r.start, i.start]  }
            }, group1[key][0])
            group2.push(result)
        }
        return group2;
    }
    render() {
        const { active } = this.state;
        const { history } = this.props;

        return (
            <div className="tab-schedule">
                <div className="tab-header">
                    <Container>
                        <Row>
                            <Col md={12}>
                                <ul>
                                    <li className={active === "7/11/2020" ? "active" : ""} value={6} onClick={this.onClickTab}>SAT</li>
                                    <li className={active === "7/12/2020" ? "active" : ""} value={0} onClick={this.onClickTab}>SUN</li>
                                    <li className={active === "7/13/2020" ? "active" : ""} value={1} onClick={this.onClickTab}>MON</li>
                                    <li className={active === "7/14/2020" ? "active" : ""} value={2} onClick={this.onClickTab}>TUE</li>
                                    <li className={active === "7/15/2020" ? "active" : ""} value={3} onClick={this.onClickTab}>WED</li>
                                    <li className={active === "7/16/2020" ? "active" : ""} value={4} onClick={this.onClickTab}>THU</li>
                                    <li className={active === "7/17/2020" ? "active" : ""} value={5} onClick={this.onClickTab}>FRI</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="tab-content">
                    <div className="list-shedule-movies">
                        <Container>
                            <h2>Schedule</h2>
                            <Row>
                                <Col md={12}>
                                    {this.renderMovies().map((movie, index) => {
                                        return (
                                            <div key={index} className="card-schedule">
                                                <div className="card-schedule-img">
                                                    <img alt={index} src={movie.movie.img}></img>
                                                </div>
                                                <div className="card-schedule-content">
                                                    <p><i className="fa fa-hourglass-end"></i> <span>{movie.movie.time}</span> </p>
                                                    <p><i className="fa fa-star"></i> <span>{movie.movie.rate}</span></p>
                                                    <p><i className="fa fa-film"></i> <span>{`${movie.movie.digital2D ? "Digital2D" : ""} ${movie.imax3D ? "Imax3D" : ""}`}</span></p>
                                                    <p><i className="fa fa-tags"></i> <span>{movie.movie.kind}</span></p>
                                                    <p><i className="fa fa-book"></i> <span>{movie.movie.content}</span></p>
                                                    {movie.start.map((item, index) => {
                                                        if(index === 5 || index === 6) {
                                                            return (
                                                                <CommonButton 
                                                                    key={index}
                                                                    children={item}
                                                                    style={{marginRight: "8px"}}
                                                                    onClick={() => { 
                                                                        if(localStorage.getItem("token")) {
                                                                            history.push(`/booking/${movie.movie.id}/${converDateToParams(movie.date)}/${item}`)
                                                                        }
                                                                        else {
                                                                            history.push("/login")
                                                                        }
                                                                        window.scroll(0,0)
                                                                    }
                                                                    }
                                                                />
                                                            )
                                                        }
                                                    })}

                                                </div>
                                            </div>
                                        )
                                    })}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tab
