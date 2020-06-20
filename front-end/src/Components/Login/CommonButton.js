import React, { Component } from 'react';
import "./CommonButton.css"


export default class CommonButton extends Component {
    render() {
        const { children, style, type } = this.props;
        return (
            <>
                <button
                    style={{ ...style }}
                    type={type}
                >
                    {children}
                </button>
            </>
        )
    }
}
