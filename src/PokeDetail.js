import React from 'react'
import style from './PokeDetail.css'
import request from 'superagent'
import Spinner from './Spinner.js'

export default class PokeDetail extends React.Component {

    state = {
        pokeData: {},
    }

    componentDidMount = async () => {
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
                <h3>This Page Contains Very Specific Info</h3>
                {
                    this.state.loading
                        ? <Spinner />
                        : <div>pokemon info goes here, maybe poke item
                            <img src={this.state.pokeData.url_image} alt="othermonster" />
                            <p>{this.stte.pokeData.pokemon}</p>
                        </div>
                }
            </>
        )
    }
}
