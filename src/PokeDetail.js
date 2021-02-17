import React from 'react'
import style from './PokeDetail.css'
import request from 'superagent'
import Spinner from './Spinner.js'

export default class PokeDetail extends React.Component {

    state = {
        pokeData: {},
    }


    componentDidMount = async () => {
        await this.loadPokemon();
    }


    loadPokemon = async () => {
        this.setState({ loading: true });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokeName}`);

        this.setState({
            pokeData: data.body.results[0],
        })

        this.setState({ loading: false });
    }


    render() {

        return (
            <>
                {
                    this.state.loading
                        ? <Spinner />
                        : <div className="poke-detail">
                            <div classname="poke-text">
                                <p>it is none other than...</p>
                                <h2>{this.state.pokeData.pokemon}</h2>
                            </div>
                            <div className="poke-details">
                                <img className="poke-image" onClick={this.handlePokeClick}
                                    src={this.state.pokeData.url_image} height="300" alt="smallmonster" />
                                <p>egg group / shape / ability</p>
                                <p className="stat-text">{this.state.pokeData.egg_group_2} -- {this.state.pokeData.shape} -- {this.state.pokeData.ability_1}</p>
                            </div>

                        </div>
                }
            </>
        )
    }
}
