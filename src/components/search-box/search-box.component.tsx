import { ChangeEventHandler } from 'react'

import './search-box.styles.css'

type SearchBoxProps = {
  placeholder?: string
  className: string
  onChangeHandler: ChangeEventHandler<HTMLInputElement>
}

const SearchBox = ({
  placeholder,
  className,
  onChangeHandler,
}: SearchBoxProps) => (
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
