import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';


import CommonInput from '../Components/Common/CommonInput';
import CommonButton from '../Components/Common/CommonButton';
import Loading from '../Components/Common/Loading';
import * as act from '../Action/register.action';

import "./Register.css";
class Register extends Component {
    state = {
        email: "",
        password: "",
        confirmPassword: ""
    }
    // toast
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { registerError, registerSuccess, history } = this.props;
        if (nextProps.registerError && nextProps.registerError !== registerError) {
            toast.error(nextProps.registerError.message)
        }
        if (nextProps.registerSuccess && nextProps.registerSuccess !== registerSuccess) {
            history.push("/register/success")
        }
    }
    onSubmit = e => {
        e.preventDefault();
        const { email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            toast.error("Please confirm correct password")
        }
        else {
            const { doRegister } = this.props;
            doRegister({ email, password })
            this.setState({
                email: "",
                password: "",
                confirmPassword: ""
            })

        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { history, register, registerSuccess } = this.props;
        const { email, password, confirmPassword } = this.state;
        return (
            register ? <Loading /> :
                <div className="register">
                    <Container style={{ marginTop: "100px" }}>
                        <form onSubmit={this.onSubmit}>
                            <CommonInput
                                label="Email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={this.onChange}
                            />
                            <CommonInput
                                label="Password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={this.onChange}
                            />
                            <CommonInput
                                label="Confirm Password"
                                name="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={this.onChange}
                            />
                            <CommonButton
                                children="Register"
                                style={{ width: "100%" }}
                                type="submit"
                            />
                        </form>
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
                    </Container>
                </div>
        )
}
}
const mapStateToProps = (state) => ({
    register: state.register.register,
    registerSuccess: state.register.registerSuccess,
    registerError: state.register.registerError
})

const mapDispatchToProps = dispatch => ({
    doRegister: account => {
        dispatch(act.doRegister(account))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
