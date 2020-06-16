import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import routers from '../../Constants/routers';
import Navigation from './Navigation';

export default class Layout extends Component {
    render() {
        return (
            <Router>
                <Navigation/>
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
            </Router>
        )
    }
}
