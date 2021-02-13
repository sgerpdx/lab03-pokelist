import React from 'react';
import pokes from './data.js';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import Sort from './Sort.js';
import Header from './Header.js';
import style from './SearchPage.css';

export default class SearchPage extends React.Component {

    state = {
        query: '',
        order: 'Ascending',
        category: 'pokemon',
    }

    handleOrderChange = (e) => {
        this.setState({
            order: e.target.value
        });
    }

    handleCategoryChange = (e) => {
        this.setState({
            category: e.target.value
        });
    }

    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    render() {
        console.log(this.state.query);
        console.log(this.state.category);
        console.log(this.state.order);

        if (this.state.order === 'Ascending') {
            pokes.sort((a, b) =>
                a[this.state.category].localeCompare(b[this.state.category]));
        } else {
            pokes.sort((a, b) =>
                b[this.state.category].localeCompare(a[this.state.category]));
        }

        const filteredPokes = pokes.filter(poke => poke.pokemon.includes(this.state.query))
        console.log(filteredPokes);

        return (
            <section>
                <div className="search-layout">
                    <nav className="search-area">

                        <SearchBar currentValue={this.state.query}
                            handleChange={this.handleInputChange}
                            handleSubmit={this.handleInputSubmit} />

                        <form className="sort-box">
                            Order:
                            <Sort currentValue={this.state.order}
                                handleChange={this.handleOrderChange}
                                options={['Ascending', 'Descending']} />
                        </form>

                        <form className="sort-box">
                            Category:
                            <Sort currentValue={this.state.category}
                                handleChange={this.handleCategoryChange}
                                options={['pokemon', 'ability_1', 'egg_group_2', 'shape']} />
                        </form>

                    </nav>
                    <PokeList pokes={filteredPokes} />
                </div>
            </section>


        )
    }
}
