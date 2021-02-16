import React from 'react'
//import pokes from './data.js';

export default class SearchBar extends React.Component {
    render() {
        return (

            <form className="input-search">
                <label>
                    Pokemon:
                    <input type="text" value={this.props.currentValue}
                        onChange={this.props.handleChange}
                        key={this.props.query} />
                </label>
            </form>


        )
    }
}
