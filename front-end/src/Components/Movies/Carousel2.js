import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel2.css";
import CardMovie from '../Movies/CardMovie';

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      speed: 2000,
    //   autoplay: true
    };
    const { movies, history } = this.props;
    
    return (
      <div className="carousel-2">
        <div className="blur"/>
        <Slider {...settings}>
          {movies.map((movie, index) => {
            return (
              <div key={index} className="div-cha">
                <CardMovie movie={movie} showDetail history={history}/>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}