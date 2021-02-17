import React from 'react';
import pokes from './data.js';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import Sort from './Sort.js';
import Header from './Header.js';
import style from './SearchPage.css';
import request from 'superagent';

export default class SearchPage extends React.Component {

    state = {
        query: '',
        order: 'asc',
        category: 'pokemon',
        pokemon: [],
        //load: false,
    }

    componentDidMount = async () => {
        await this.retrievePokemon();
    }

    retrievePokemon = async () => {
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&direction=${this.state.order}`);

        //this.setState({loading: true});
        this.setState({
            pokemon: data.body.results,
        })
        //this.setState({loading: false});

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

    handleClick = async () => {
        await this.retrievePokemon();
    }

    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    render() {
        console.log(this.state.query);
        console.log(this.state.order);
        console.log(this.state.category);


        return (
            <section>
                <div className="search-layout">
                    <nav className="search-area">

                        <SearchBar currentValue={this.state.query}
                            handleChange={this.handleInputChange} />

                        <button onClick={this.handleClick} className="poke-button">Search!</button>

                        <form className="sort-box">
                            Order:
                            <Sort currentValue={this.state.order}
                                handleChange={this.handleOrderChange}
                                options={['asc', 'desc']} />
                        </form>

                        <form className="sort-box">
                            Category:
                            <Sort currentValue={this.state.category}
                                handleChange={this.handleCategoryChange}
                                options={['pokemon', 'ability_1', 'egg_group_2', 'shape']} />
                        </form>

                    </nav>

                    {/* spinner here? */}

                    <PokeList pokes={this.state.pokemon} />
                </div>
            </section>


        )
    }
}
