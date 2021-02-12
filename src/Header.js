import React from 'react'
import style from './Header.css';
import pokes from './data.js';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-area"
                key={pokes.pokemon}>
                Pokemonpokemonpokemonpokem
            </div>
        )
    }
}
