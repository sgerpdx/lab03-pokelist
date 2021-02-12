import React from 'react'
import pokes from './data.js';

export default class SearchBar extends React.Component {
    render() {
        return (
            <input value={this.props.currentValue}
                onSubmit={this.props.handleQuery}
                key={pokes.pokemon}>


            </input>
        )
    }
}