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
        //order: 'Ascending',
        //category: 'pokemon',
        pokemon: [],
        //load: false,
    }

    componentDidMount = async () => {
        await this.retrievePokemon();
    }

    retrievePokemon = async () => {
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}`);
        // const data = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}')
        //this.setState({loading: true});
        this.setState({
            pokemon: data.body.results,
        })
        //this.setState({loading: false});

    }

    // handleOrderChange = (e) => {
    //     this.setState({
    //         order: e.target.value
    //     });
    // }

    // handleCategoryChange = (e) => {
    //     this.setState({
    //         category: e.target.value
    //     });
    // }

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
        // if (this.state.order === 'Ascending') {
        //     pokes.sort((a, b) =>
        //         a[this.state.category].localeCompare(b[this.state.category]));
        // } else {
        //     pokes.sort((a, b) =>
        //         b[this.state.category].localeCompare(a[this.state.category]));
        // }

        // const filteredPokes = pokes.filter(poke => poke.pokemon.includes(this.state.query))

        return (
            <section>
                <div className="search-layout">
                    <nav className="search-area">

                        <SearchBar currentValue={this.state.query}
                            handleChange={this.handleInputChange} />

                        {/* need to figure out where to put this, either here or in SearchBar component */}
                        <button onClick={this.handleClick} className="poke-button">Search!</button>

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
                    {/* spinner here? */}

                    {/* <div>
                        {this.state.pokemon.map(poke =>
                            <div>
                                <img src={poke.url_image} alt="invisible-monster" height="100" />
                                <p>{poke.pokemon}</p>
                                <p>{poke.ability_1}</p>
                                <p>{poke.egg_group_2}</p>
                                <p>{poke.shape}</p>
                            </div>
                        )}
                    </div> */}

                    <PokeList pokes={this.state.pokemon} />
                </div>
            </section>


        )
    }
}
