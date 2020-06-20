import React, { Component } from 'react';

import './CommonInput.css';

export default class CommonInput extends Component {
    render() {
        const { name, label, type } = this.props;
        return (
            <div className="common-Input">
                <div className="group-field">
                    <input type={type} name={name} id={name} className="input-field" required />
                    <label htmlFor={name} className="label-field">{label}</label>
                </div>
            </div>
        )
    }
}
