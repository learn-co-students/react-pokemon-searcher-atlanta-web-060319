import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'


class PokemonPage extends React.Component {
  state = {
    pokemonCollection:[],
    searchTerm: ''
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(data => this.setState({pokemonCollection:data}));
    // .catch(e => console.error(:-)));
  }

  handleSearch = (e,{value})=> {
  console.log({value});
  this.setState({searchTerm: value})
  }

  filterDisplay = () => {
    return this.state.pokemonCollection.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
  //
//const result = inventory.find( fruit => fruit.name === 'cherries' );
  }


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search  onSearchChange={(this.handleSearch)} showNoResults={false} />
        <br />
        <PokemonForm />
        <br />
        <PokemonCollection pokemonCollection={this.filterDisplay()}/>
      </div>
    )
  }
}

export default PokemonPage
