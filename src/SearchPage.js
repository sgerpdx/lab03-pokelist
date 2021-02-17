import React from 'react';
import pokes from './data.js';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import Sort from './Sort.js';
import Header from './Header.js';
import style from './SearchPage.css';
import request from 'superagent';
import Spinner from './Spinner.js';

export default class SearchPage extends React.Component {

    state = {
        query: '',
        order: '',
        category: '',
        pokeData: [],
        loading: false,
        totalPokemon: 0,
        currentPage: 1,
    }

    componentDidMount = async () => {
        await this.retrievePokemon();
    }

    retrievePokemon = async () => {
        this.setState({ loading: true });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.category}&direction=${this.state.order}&page=${this.state.currentPage}&perPage=20`);

        this.setState({
            pokeData: data.body.results,
            totalPokemon: data.body.count,
        })

        this.setState({ loading: false });

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
        this.setState({ currentPage: 1 });

        this.retrievePokemon();
    }

    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }


    handlePrevClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage - 1
        })

        await this.retrievePokemon();
    }

    handleNextClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage + 1
        })

        await this.retrievePokemon();
    }


    render() {
        console.log(this.state.query);
        console.log(this.state.order);
        console.log(this.state.category);

        const finalPage = (Math.floor(this.state.totalPokemon) / 20)


        return (
            <section>
                <div className="search-layout">
                    <nav className="search-area">

                        <div className="page-fwd-back">
                            <button className="pg-nav" onClick={this.handlePrevClick} disabled={this.state.currentPage === 1}>Prev</button>
                            <h4><em>Page {this.state.currentPage}</em></h4>
                            <button className="pg-nav" onClick={this.handleNextClick} disabled={this.state.currentPage >= finalPage}>Next</button>
                        </div>

                        <SearchBar currentValue={this.state.query}
                            handleChange={this.handleInputChange} />

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

                        <button onClick={this.handleClick} className="poke-button">Search!</button>

                    </nav>

                    <div className="display-area">
                        {this.state.loading
                            ? <Spinner />
                            : <PokeList pokes={this.state.pokeData} />
                        }
                    </div>

                </div>
            </section >


        )
    }
}
