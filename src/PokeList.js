import React from 'react'
import PokeItem from './PokeItem.js';
import pokes from './data.js';
import style from './PokeList.css';

export default class PokeList extends React.Component {
    render() {

        const pokeListItem = this.props.pokes.map(poke => <PokeItem poke={poke} />)

        return (
            <ul className="list-area"
                key={pokes.pokemon}
                onClick={this.props.handleChange}>
                {pokeListItem}
            </ul>
        )
    }
}
