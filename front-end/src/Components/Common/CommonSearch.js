import React, { Component } from 'react';

import './CommonSearch.css';

export default class CommonSearch extends Component {
    render() {
        const { name, label, type, value, onChange } = this.props;
        return (
            <div className="common-search">
                <div className="group-field">
                    <i className="fa fa-search"></i>
                    <input
                        type={type}
                        name={name}
                        id={name}
                        className="input-field"
                        value={value}
                        onChange={onChange}
                        placeholder="Search movie"
                    />
                </div>
            </div>
        )
    }
}
