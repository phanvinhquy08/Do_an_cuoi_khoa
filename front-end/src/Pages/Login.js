import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';


import CommonInput from '../Components/Common/CommonInput';
import CommonButton from '../Components/Common/CommonButton';
import Loading from '../Components/Common/Loading';
import * as act from '../Action/login.action';

import "./Login.css";
class Login extends Component {
    state = {
        email: "",
        password: ""
    }
    // toast
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { loginError, loginSuccess, history } = this.props;
        if(nextProps.loginError && nextProps.loginError !== loginError) {
            toast.error(nextProps.loginError)
        }
        if(nextProps.loginSuccess && nextProps.loginSuccess !== loginSuccess) {
            // toast.success("Wellcome back");
            history.push("/")
        }
    }
    onSubmit = e => {
        const { email, password } = this.state;
        const { doLogin } = this.props;
        e.preventDefault();
        doLogin({ email, password })
        this.setState({
            email: "",
            password: ""
        })
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { history, login, loginError, loginSuccess } = this.props;
        const { email, password } = this.state;
        return (
            login ? <Loading /> :
                <div className="login">
                    <Container style={{ paddingTop: "100px" }}>
                        <form onSubmit={this.onSubmit}>
                            <CommonInput label="Email" name="email" type="email" value={email} onChange={this.onChange} />
                            <CommonInput label="Password" name="password" type="password" value={password} onChange={this.onChange} />
                            <CommonButton
                                children="Login"
                                style={{ width: "100%" }}
                                type="submit"
                            />
                            <p>Don't have acount? <span onClick={() => history.push("/register")}>register now</span></p>
                        </form>

                    </Container>
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>

        )
    }
}
const mapStateToProps = (state) => ({
    login: state.login.login,
    loginSuccess: state.login.loginSuccess,
    loginError: state.login.loginError
})

const mapDispatchToProps = dispatch => ({
    doLogin: account => {
        dispatch(act.doLogin(account))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
