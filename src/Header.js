import React from 'react'
import style from './Header.css';
import pokes from './data.js';
import { NavLink, withRouter } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <header className="nav-links">
                <NavLink exact activeClassName="selected" to="/">
                    Home
                </NavLink>

                <NavLink exact activeClassName="selected" to="/search">
                    Search
                </NavLink>
                <p className="title-area">Pokedexception</p>
            </header>
        )
    }
}
