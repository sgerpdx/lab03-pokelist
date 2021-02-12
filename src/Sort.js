import React from 'react'
import pokes from './data.js';

export default class Sort extends React.Component {
    render() {
        return (
            <select
                value={this.props.currentValue}
                onChange={this.props.handleChange}
                key={pokes.pokemon}>
                {
                    this.props.options.map(
                        pokeThing =>
                            <option value={pokeThing}> {pokeThing}
                            </option>
                    )
                }
            </select>
        )
    }
}