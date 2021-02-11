import React from 'react';
import pokes from './data.js';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import Sort from './Sort.js';
import Header from './Header.js';

export default class SearchPage extends React.Component {

    state = {
        pokemon: '',
        order: '',
        category: 'Pokemon',
    }

    handleOrderChange = (e) => {
        this.setState({
            order: e.target.value
        });
    }

    handleCategoryChange = (e) => {
        this.setState({
            category: Number(e.target.value)
        });
    }


    render() {

        const filteredPokes = pokes.filter((poke) => {
            if (!this.state.order && !this.state.category) return true;

            if (this.state.order && !this.state.category) {
                if (poke.order === this.state.order) return true;
            }

            if (!this.state.order && this.state.category) {
                if (poke.category === this.state.category) return true;
            }

            if (this.state.order && this.state.category) {
                if (poke.order === this.state.order && poke.category === this.state.category) return true;
            }

            return false;
        });

        return (
            <section>
                <Header />
                <div className="search-layout">
                    <nav className="search-area">

                        {/* <form className="search-input">
                            Pokemon
                            <SearchBar currentValue={this.state.pokemon}
                                handleChange={this.handlePokemonChange}
                                options={['Pikachu', 'Charmander', 'Mew']} />
                            <button>Search by Name</button>
                        </form> */}

                        <form className="sort-filter">
                            Order
                            <Sort currentValue={this.state.order}
                                handleChange={this.handleOrderChange}
                                options={['Ascending', 'Descending']} />
                        </form>

                        <form className="sort-filter">
                            Category
                            <Sort currentValue={this.state.cateogry}
                                handleChange={this.handleCategoryChange}
                                options={['Pokemon', 'Type', 'Attack', 'Defense']} />
                        </form>

                    </nav>
                    <PokeList pokes={filteredPokes} />
                </div>
            </section>

        )
    }
}
