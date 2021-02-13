import React from 'react';
import pokes from './data.js';
import style from './PokeItem.css';

export default class PokeItem extends React.Component {
    render() {
        return (
            <li className="pokemon-render" key={this.props.poke._id} >
                <img src={this.props.poke.url_image} height="200" />
                <p className="poke-text"><em><u>name</u>:</em> {this.props.poke.pokemon}</p>
                <p className="poke-text"><em><u>egg group</u>:</em> {this.props.poke.egg_group_2}</p>
                <p className="poke-text"><em><u>shape</u>:</em> {this.props.poke.shape}</p>
                <p className="poke-text"><em><u>ability</u>:</em> {this.props.poke.ability_1}</p>
            </li>
        )
    }
}
