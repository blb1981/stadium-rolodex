import { Component } from 'react'

import './search-box.styles.css'

class SearchBox extends Component {
  render() {
    const { className, onChangeHandler, placeholder } = this.props

    return (
      <div>
        <input
          type='search'
          placeholder={placeholder}
          className={`search-box ${className}`}
          onChange={onChangeHandler}
        />
      </div>
    )
  }
}

export default SearchBox
