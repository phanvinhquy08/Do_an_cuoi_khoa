import React, { Component } from 'react'
import { Button } from 'reactstrap';

import "./CardNews.css";

export default class CardNews extends Component {
    detailNews = (id) => {
        const { history } = this.props;
        history.push("/news/" + id);
        window.scrollTo(0,0);
    }
    render() {
        const { item } = this.props;
        return (
            <div className="card-news">
                <div className="card-news-image" onClick={() => this.detailNews(item.id)}>
                    <img src={item.img} alt={item.id} />
                </div>
                <div className="card-news-content">
                    <h6 onClick={() => this.detailNews(item.id)}>{item.title}</h6>
                    <div className="card-news-btn">
                        <h6><i className="fa fa-table"></i>{item.date}</h6>
                        <Button onClick={() => this.detailNews(item.id)}>Read More</Button>
                    </div>
                </div>
            </div>
        )
    }
}
