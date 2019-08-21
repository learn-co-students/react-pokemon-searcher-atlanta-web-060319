import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  render() {
    let pokemonStats1 = this.props.pokemon.stats
    // this.props.pokemon.stats.find(object => object.name === "hp").value
  console.log(pokemonStats1);
    return (
      <Card>
        <div>
          <div className="image">
            <img alt='' src={this.props.pokemon.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            {this.props.pokemon.stats.find(object => object.name === "hp").value}
            <span>
              {/* {pokemonStats.value} */}
              <i className="icon heartbeat red" />
           
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
