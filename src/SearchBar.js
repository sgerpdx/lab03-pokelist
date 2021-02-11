import React from 'react'

export default class SearchBar extends React.Component {
    render() {
        return (
            <input value={this.props.currentValue}
                onSubmit={this.props.handleQuery}>


            </input>
        )
    }
}