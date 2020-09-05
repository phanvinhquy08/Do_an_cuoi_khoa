import React, { Component } from 'react';

import "./CardMovie.css";
import Button from '../../Components/Common/CommonButton';
import CommonButton from '../../Components/Common/CommonButton';

export default class CardMovie extends Component {
    render() {
        const { movie, showDetail, history } = this.props;
        return (
            <div className="card-movie">
                <div className="card-movie-image">
                    <img src={movie.img} />
                    {showDetail && <div className="card-movie-blur" />}
                </div>
                {showDetail && <div className="card-movie-content" >
                    <h6>{movie.name}</h6>
                    <p><i className="fa fa-hourglass-end"></i> <span>{movie.time}</span> </p>
                    <p><i className="fa fa-star"></i> <span>{movie.rate}</span></p>
                    <p><i className="fa fa-film"></i> <span>{`${movie.digital2D ? "Digital2D" : ""} ${movie.imax3D ? "Imax3D" : ""}`}</span></p>
                    <p><i className="fa fa-tags"></i> <span>{movie.kind}</span></p>
                </div>}
                <div className={`card-movie-badge ${movie.playing ? "hot" : "upComing"}`}>
                    <p>{`${movie.playing ? "HOT" : "UPCOMING"}`}</p>
                </div>
                {showDetail && <div className="card-movie-btn">
                    <CommonButton
                        type="button"
                        children="Detail"
                        style={{ transform: "scale(0.9)" }}
                        onClick={() => {
                            history.push("/movies/" + movie.id)
                            window.scroll(0,0)
                        }
                        }
                    />
                    <CommonButton
                        type="button"
                        children="Book"
                        style={{ transform: "scale(0.9)" }}
                        onClick={() => {
                            history.push("/movies/" + movie.id)
                            window.scroll(0,0)
                        }
                        }
                    />
                </div>}
            </div>
        )
    }
}
