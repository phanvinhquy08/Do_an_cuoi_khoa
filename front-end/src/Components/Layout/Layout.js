import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { isMobile } from 'react-device-detect';

import routers from '../../Constants/routers';
import Navigation from './Navigation';
import Footer from './Footer'

class Layout extends Component {
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { loginSuccess, history } = this.props;
        if(nextProps.loginSuccess && nextProps.loginSuccess !== loginSuccess) {
            toast.success("Wellcome");
        }
    }
    render() {
        
        return (
            <Router>
                <Navigation />
                <Switch>
                    {routers.map((router, index) => {
                        return (
                            <Route
                                key={index}
                                path={router.path}
                                component={router.component}
                                exact={true}
                            />
                        )
                    })}
                </Switch>
                {isMobile ? null : <Footer />}
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
            </Router>
        )
    }
}
const mapStateToProps = (state) => ({
    loginSuccess: state.login.loginSuccess
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)