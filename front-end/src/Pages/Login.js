import React, { Component } from 'react';
import { Container } from 'reactstrap';

import CommonInput from '../Components/Login/CommonInput';
import CommonButton from '../Components/Login/CommonButton';

import "./Login.css";
class Login extends Component {
    state = {
        userName: "",
        password: ""
    }
    onSubmit = e => {
        e.preventDefault();
        
    }
    render() {
        const { history } = this.props;
        const { userName, password } = this.state;
        return (
            <div className="login">
                <Container style={{ marginTop: "100px" }}>
                    <form onSubmit={this.onSubmit}>
                        <CommonInput label="User name" name="userName" type="text" value={userName}/>
                        <CommonInput label="Password" name="password" type="password" value={password} />
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
