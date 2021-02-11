import React from 'react'

export default class Sort extends React.Component {
    render() {
        return (
            <select
                value={this.props.currentValue}
                onChange={this.props.handleChange}>
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