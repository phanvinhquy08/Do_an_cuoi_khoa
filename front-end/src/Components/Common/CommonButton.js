import React, { Component } from 'react';
import "./CommonButton.css"
import { Button } from 'reactstrap';


export default class CommonButton extends Component {
    render() {
        const { children, style, type, onClick } = this.props;
        return (
            <>
                <Button
                    style={{ ...style }}
                    type={type}
                    onClick={onClick}
                >
                    {children}
                </Button>
            </>
        )
    }
}
