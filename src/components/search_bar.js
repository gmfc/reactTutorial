import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = { term: 'ss' }
  }

  render () {
    return (
      <div className='search-bar'>
        <h1>{this.state.term}</h1>
        <input
          value={this.state.term}
          onChange={e => this.setState({ term: e.target.value })}
        />
      </div>
    )
  }
}

export default SearchBar
