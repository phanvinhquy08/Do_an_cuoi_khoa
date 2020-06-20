import React, { Component } from 'react';
import { Container } from 'reactstrap';

import "./RegisterSuccess.css";

export default class RegisterSuccess extends Component {
    render() {
        const { history } = this.props;
        return (
            <div className="register-success">
                <Container>
                    <i className="fa fa-check-circle"></i>
                    <h1>You have been registered successfully!</h1>
                    <p onClick={() => history.push("/login")}>Login now <i className="fa fa-arrow-right"></i></p>
                </Container>
            </div>
        )
    }
}
