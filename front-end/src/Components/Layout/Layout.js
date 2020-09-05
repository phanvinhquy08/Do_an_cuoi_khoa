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
import Footer from './Footer';
import SideBar from './SideBar';
import "./Layout.css"
class Layout extends Component {
    state = {
        openOrderDrawer: false
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { loginSuccess, history } = this.props;
        if (nextProps.loginSuccess && nextProps.loginSuccess !== loginSuccess) {
            toast.success("Wellcome");
        }
    }
    onCloseOrderDrawer = () => this.setState({openOrderDrawer: false});
    onOpenOrderDrawer = () => this.setState({openOrderDrawer: true})
    render() {

        return (
            <Router>
                <div className="layout">
                    <Navigation 
                        openOrderDrawer={this.onOpenOrderDrawer}
                    />
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
                    <SideBar 
                        show={this.state.openOrderDrawer}
                        onClose={this.onCloseOrderDrawer}
                    />
                </div>
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