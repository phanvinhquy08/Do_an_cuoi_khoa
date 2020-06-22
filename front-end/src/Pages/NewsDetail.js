import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import "./NewsDetail.css";
import * as act from '../Action/news.action';
import Loading from '../Components/Common/Loading';

class NewsDetail extends Component {
    componentDidMount() {
        const { match, doGetOneNews } = this.props;
        doGetOneNews(match.params.id)
    }
    render() {
        const { oneNews, getOneNews } = this.props;
        console.log(oneNews.imgDetail)
        return (
            <div className="news-detail">
                {
                    getOneNews ? <Loading /> :
                        (<Container>
                            <h2>{oneNews.title}</h2>
                            <div className="news-social">
                                <i className="fa fa-facebook"></i>
                                <i className="fa fa-instagram"></i>
                                <i className="fa fa-twitter"></i>
                                <i className="fa fa-youtube"></i>
                            </div>
                            <p>{oneNews.content}</p>
                            <div className="news-image">
                                { oneNews.imgDetail && oneNews.imgDetail.map((item, index)=> {
                                    return (
                                        <img src={item} alt={index} key={index}/>
                                    )
                                })}
                            </div>

                        </Container>)
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    oneNews: state.news.oneNews,
    getOneNews: state.news.getOneNews,
    getOneNewSuccess: state.news.getOneNewSuccess,
    getOneNewsError: state.news.getOneNewsError
})

const mapDispatchToProps = dispatch => ({
    doGetOneNews: id => {
        dispatch(act.doGetOneNews(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail)