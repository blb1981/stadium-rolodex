// import { Component } from 'react'
import { useState, useEffect, ChangeEvent } from 'react'

// import logo from './logo.svg'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

import { getData } from './utils/data.utils'
import './App.css'

export type Stadium = {
  id: number
  name: string
  image: string
  team: string
}

const App = () => {
  const [searchString, setSearchString] = useState('')
  const [stadiums, setStadiums] = useState<Stadium[]>([])
  const [filteredStadiums, setfilteredStadiums] = useState(stadiums) // use stadiums array as default

  useEffect(() => {
    const fetchStadiums = async () => {
      const stadiums = await getData<Stadium[]>(
        'http://localhost:5000/stadiums'
      )
      setStadiums(stadiums)
    }
    fetchStadiums()
  }, []) // empty array since only needed once when component renders

  useEffect(() => {
    const newfilteredStadiums = stadiums.filter((stadium) => {
      return (
        stadium.name.toLocaleLowerCase().includes(searchString) ||
        stadium.team.toLocaleLowerCase().includes(searchString)
      )
    })

    setfilteredStadiums(newfilteredStadiums) // update stadium list
  }, [stadiums, searchString]) // only needed when search box or stadium list is updated

  const onSearchChnage = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchString = e.target.value.toLocaleLowerCase()
    setSearchString(searchString)
  }

  console.log('rendered')
  return (
    <div className='App'>
      <h1 className='title'>Stadium Rolodex</h1>
      <SearchBox
        className='stadium-search-box'
        onChangeHandler={onSearchChnage}
        placeholder={'Search stadiums'}
      />
      <CardList stadiums={filteredStadiums} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       stadiums: [],
//       searchString: '',
//     }
//   }

//   componentDidMount() {
//     fetch('http://localhost:5000/stadiums')
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(
//           () => {
//             return { stadiums: users }
//           },
//           () => {
//             console.log(this.state.stadiums)
//           }
//         )
//       })
//   }

//   onSearchChnage = (e) => {
//     const searchString = e.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return { searchString }
//     })
//   }

//   render() {
//     const { stadiums, searchString } = this.state
//     const { onSearchChnage } = this

//     const filteredStadiums = stadiums.filter((stadium) => {
//       return (
//         stadium.name.toLocaleLowerCase().includes(searchString) ||
//         stadium.team.toLocaleLowerCase().includes(searchString)
//       )
//     })

//     return (
//       <div className='App'>
//         <h1 className='title'>Stadium Rolodex</h1>
//         <SearchBox
//           className={'stadium-search-box'}
//           onChangeHandler={onSearchChnage}
//           placeholder={'Search stadiums'}
//         />
//         <CardList stadiums={filteredStadiums} />
//       </div>
//     )
//   }
// }

export default App
