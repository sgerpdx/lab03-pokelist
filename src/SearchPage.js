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
        console.log(pokes);
        console.log(this.state.category);

        //***this will evaluate the state of 'order' and sort based on that:
        if (this.state.order === 'Ascending') {
            pokes.sort((a, b) =>
                a[this.state.category].localeCompare(b[this.state.category]));
        } else {
            pokes.sort((a, b) =>
                b[this.state.category].localeCompare(a[this.state.category]));
        }

        const filteredPokes = pokes.map(poke => <div key={poke._id}>
            <img src={poke.url_image} height="100" />
            <p>{poke.pokemon}</p>
        </div>)

        //const filteredPokes = this.state.pokes.filter(poke => poke.pokemon.includes(this.state.query))
        console.log(filteredPokes);
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

                        {/* <input onChange={this.handleInputChange} /> */}

                        <form className="sort-box">
                            Order
                            <Sort currentValue={this.state.order}
                                handleChange={this.handleOrderChange}
                                options={['Ascending', 'Descending']} />
                        </form>

                        <form className="sort-box">
                            Category
                            <Sort currentValue={this.state.category}
                                handleChange={this.handleCategoryChange}
                                options={['pokemon', 'ability_1', 'egg_group_2', 'shape']} />
                        </form>

                    </nav>
                    <div>{filteredPokes}</div>
                    {/* <PokeList pokes={filteredPokes} /> */}
                </div>
            </section>


        )
    }
}
