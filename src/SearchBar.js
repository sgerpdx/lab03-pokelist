import React from 'react'

export default class SearchBar extends React.Component {
    render() {
        return (

            <form className="input-search">
                <label>
                    Pokemon:
                    <input type="text" value={this.props.currentValue}
                        onChange={this.props.handleChange} />
                </label>
            </form>

        )
    }
}
