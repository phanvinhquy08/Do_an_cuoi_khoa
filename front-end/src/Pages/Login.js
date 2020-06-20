import React, { Component } from 'react';
import { Container } from 'reactstrap';

import CommonInput from '../Components/Login/CommonInput';
import CommonButton from '../Components/Login/CommonButton';

import "./Login.css";
class Login extends Component {
    render() {
        const { history } = this.props;
        return (
            <div className="login">
                <Container style={{ marginTop: "32px" }}>
                    <form>
                        <CommonInput label="User name" name="userName" type="text" />
                        <CommonInput label="Password" name="password" type="password" />
                        <CommonButton
                            children="Login"
                            style={{ width: "100%" }}
                            type="submit"
                        />
                        <p>Don't have acount? <span onClick={() => history.push("/register")}>register now</span></p>
                    </form>

                </Container>
            </div>
        )
    }
}
export default Login
