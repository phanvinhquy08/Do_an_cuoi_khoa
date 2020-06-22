import React, { Component } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Cardmovie from './CardMovie';
import "./Carousel.css"
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export default class CarouselMovie extends Component {
    render() {
        const { movies, history } = this.props;
        return (
            <div className="carousel-movie">
                <Carousel
                    responsive={responsive}
                    centerMode={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                >
                    {movies.map((movie, index) => {
                        return (
                            <Cardmovie
                                movie={movie}
                                key={index}
                                showButton={true}
                                history={history}
                                showDetail={true}
                            />
                        )
                    })}
                </Carousel>
            </div>
        )
    }
}
