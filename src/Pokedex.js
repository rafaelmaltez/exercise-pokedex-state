import React from 'react';
import Button from './Button';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemons: this.props.pokemons,
            position: 0,
        }
        this.nextPokemon = this.nextPokemon.bind(this);
    }

    nextPokemon() {
        this.setState((anterior, _props) => (
            this.state.position === this.state.pokemons.length - 1 ? {position: 0} : {position: anterior.position + 1}
        ))
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
            <Button action={this.nextPokemon} label="Próximo Pokemon"/>
            </main>
        );
    }
}

export default Pokedex;