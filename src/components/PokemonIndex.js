import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import PokeFilter from './PokeFilter'
const API = 'http://localhost:3000/pokemon/'


class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemons: [],
      searchTerm: '',
      filterTerm: ''
    }
  }

  componentDidMount () {
    fetch(API)
    .then(res => res.json())
    .then(pokemons => this.setState({pokemons: pokemons}))
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ searchTerm: value })
  }

  addPoke = (newPoke) => {
    console.log("in handleFormSubmit", newPoke)
    console.log([...this.state.pokemons, newPoke])
    this.setState({pokemons: [...this.state.pokemons, newPoke]})
  }

  handleFilterChange = (e) => {
    console.log("inside FilterChange")
    this.setState({
      filterTerm: e.target.value
    })
  }

  searchFilteredPoke = () => {
    return this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm))
  }

  render() {
    const filteredPoke = () => {
      if (this.state.filterTerm === "" || null || undefined) {
        return this.searchFilteredPoke()
      } else {
        return this.searchFilteredPoke().filter(pokemon => pokemon.types.includes(this.state.filterTerm))
      }
    }

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokeFilter handleFilterChange={this.handleFilterChange}/>
        <br />
        <PokemonCollection pokemons={filteredPoke()}/>
        <br />
        <PokemonForm addPoke={this.addPoke}/>
      </div>
    )
  }
}

export default PokemonPage
