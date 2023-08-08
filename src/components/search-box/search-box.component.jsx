// import { Component } from 'react'

import './search-box.styles.css'

const SearchBox = ({ placeholder, className, onChangeHandler }) => (
  <div>
    <input
      type='search'
      placeholder={placeholder}
      className={`search-box ${className}`}
      onChange={onChangeHandler}
    />
  </div>
)

// class SearchBox extends Component {
//   render() {
//     const { className, onChangeHandler, placeholder } = this.props

//     return (
//       <div>
//         <input
//           type='search'
//           placeholder={placeholder}
//           className={`search-box ${className}`}
//           onChange={onChangeHandler}
//         />
//       </div>
//     )
//   }
// }

export default SearchBox
