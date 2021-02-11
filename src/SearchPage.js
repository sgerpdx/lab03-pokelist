import React from 'react';
import data from './data.js';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import Sort from './Sort.js';

export default class SearchPage extends React.Component {
    render() {
        return (
            <div className="search-layout">
                <nav className="search-area">
                    <SearchBar />
                    <Sort />
                </nav>
                <div className="pokemon-area">
                    <PokeList />
                </div>
            </div>
        )
    }
}
