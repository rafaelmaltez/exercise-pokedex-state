import React from 'react';
import Button from './Button';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemons: this.props.pokemons,
            position: 0,
        }
        this.nextPokemon = this.nextPokemon.bind(this);
        this.filterPokemonByType = this.filterPokemonByType.bind(this);
    }

    nextPokemon() {
        this.setState((anterior, _props) => (
            this.state.position === this.state.pokemons.length - 1 ? {position: 0} : {position: anterior.position + 1}
        ))
    }

    filterPokemonByType(e) {
        this.setState(
            {type: e.target.id}
        )
        this.setState(
            {pokemons: this.props.pokemons.filter(pokemon => pokemon.type === this.state.type)}
        )
    }

    render() {        
        return (
            <main>
            <div className="pokedex">

                {
                this.state.pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)
                    .filter((pokemon, index) => index === this.state.position )
                }                
            </div>
            <Button id="next" action={this.nextPokemon} label="Próximo Pokemon"/>
            <Button id="Fire" action={this.filterPokemonByType} label="Fire" />
            <Button id="Psychic" action={this.filterPokemonByType} label="Psychic" />
            </main>
        );
    }
}

export default Pokedex;