import React from 'react'
import PokeItem from './PokeItem.js';
import pokes from './data.js';

export default class PokeList extends React.Component {
    render() {

        const pokeListItem = this.props.pokes.map(poke => <PokeItem poke={poke} />)

        return (
            <ul className="list-area"
                key={pokes.pokemon}>
                {pokeListItem}
            </ul>
        )
    }
}
