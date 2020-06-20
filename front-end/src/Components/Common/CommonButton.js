import React, { Component } from 'react';
import "./CommonButton.css"
import { Button } from 'reactstrap';


export default class CommonButton extends Component {
    render() {
        const { children, style, type } = this.props;
        return (
            <>
                <Button
                    style={{ ...style }}
                    type={type}
                >
                    {children}
                </Button>
            </>
        )
    }
}
