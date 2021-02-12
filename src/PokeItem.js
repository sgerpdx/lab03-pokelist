import React from 'react';
import pokes from './data.js';
import style from './PokeItem.css';

export default class PokeItem extends React.Component {
    render() {
        return (
            <li className="pokemon-render" key={this.props.poke._id} >
                <img src={this.props.poke.url_image} height="100" />
                <p>{this.props.poke.pokemon}</p>
                <p>{this.props.poke.type_1}</p>
                <p>{this.props.poke.attack}</p>
                <p>{this.props.poke.defense}</p>
            </li>
        )
    }
}
