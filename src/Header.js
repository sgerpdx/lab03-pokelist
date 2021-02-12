import React from 'react'
import style from './Header.css';
import pokes from './data.js';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header-area"
                key={pokes.pokemon}>
                <div className="left-space"></div>
                <p className="title-area">Pokedexception</p>
                <div className="right-space">
                    <span className="nav-link">Home</span>
                </div>
            </div>
        )
    }
}
