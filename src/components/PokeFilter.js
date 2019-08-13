import React from 'react'

export default class PokeFilter extends React.Component {
    render() {
        return (
        <div>
            Search for Pokemon by Type  <input type="text" onChange={this.props.handleFilterChange}/>
        </div>
        )
    }
}