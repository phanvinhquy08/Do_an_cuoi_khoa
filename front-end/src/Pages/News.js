import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import * as act from '../Action/news.action';
import Loading from '../Components/Common/Loading';
import CardNews from '../Components/News/CardNews';
import "./News.css"

class News extends Component {
    componentDidMount() {
        this.props.doGetNews();
    }
    render() {
        const { news, getNews, history } = this.props;
        return (
            <div className="news">
                <Container>
                    {getNews && <Loading />}
                    <Row >
                        {news.map((item, index) => (
                            <Col key={index} md={6} xs={12}>
                                <CardNews item={item} history={history} />
                            </Col>
                        ))}
                    </Row>
                </Container>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    news: state.news.news,
    getNews: state.news.getNews,
    getNewsuccess: state.news.getNewsuccess,
    getNewsError: state.news.getNewsError
})

const mapDispatchToProps = dispatch => ({
    doGetNews: () => {
        dispatch(act.doGetNews())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(News)