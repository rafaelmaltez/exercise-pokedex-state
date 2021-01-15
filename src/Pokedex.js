import React from 'react';
import Button from './Button';
import Pokemon from './Pokemon';
import './Pokedex.css';
import pokemons from './data'

class Pokedex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemons: this.props.pokemons,
            position: 0,
            typesOfPokemons: [...new Set(pokemons.map(pokemon => pokemon.type))]
        }
        this.nextPokemon = this.nextPokemon.bind(this);
        this.filterPokemonByType = this.filterPokemonByType.bind(this);
        
    }

    nextPokemon() {
        this.setState((previousState, _props) => (
            this.state.position === this.state.pokemons.length - 1 ? {position: 0} : {position: previousState.position + 1}
        ))
    }

    async filterPokemonByType(e) {
      await this.setState({type: e.target.id})
      await this.setState({pokemons: this.props.pokemons.filter(pokemon => pokemon.type === this.state.type)})
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
            {this.state.pokemons.length === 1 ? <Button classN="btn-disabled" id="next" action={this.nextPokemon} label="Próximo Pokemon"/> : 
            <Button classN="btn" id="next" action={this.nextPokemon} label="Próximo Pokemon"/>}
            {this.state.typesOfPokemons.map(type => <Button classN="btn" id={type} action={this.filterPokemonByType} label={type}/>)}
            <Button  classN="btn"id="All" action={() => this.setState({pokemons: this.props.pokemons})} label="All" />
            </main>
        );
    }
}

export default Pokedex;