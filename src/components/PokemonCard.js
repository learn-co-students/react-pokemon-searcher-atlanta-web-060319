import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      imgSrc: this.props.pokemon.sprites.front
    }
  }

  getHP = () => {
    let hp = this.props.pokemon.stats.find(stats => stats.name === 'hp')
    return hp.value
  }

  handleImageClick = () => {
    // console.log("inside handleImageClick")
    ((this.state.imgSrc === this.props.pokemon.sprites.front) ? this.setState({imgSrc: this.props.pokemon.sprites.back}) : this.setState({imgSrc: this.props.pokemon.sprites.front}))
  }


  render() {
    const {name, types} = this.props.pokemon
    // debugger
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.imgSrc} onClick={this.handleImageClick}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHP()}
            </span>
          </div>
          <br/>
          Pokemon Type(s):
          <div className="content">
            <ul>
            {types.map((type, idx) => <li key={idx}>{type}</li>)}
            </ul>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
