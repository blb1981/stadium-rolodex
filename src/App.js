import { Component } from 'react'

// import logo from './logo.svg'
import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super()

    this.state = {
      stadiums: [],
      searchString: '',
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/stadiums')
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { stadiums: users }
          },
          () => {
            console.log(this.state.stadiums)
          }
        )
      })
  }

  onSearchChnage = (e) => {
    const searchString = e.target.value.toLocaleLowerCase()
    this.setState(() => {
      return { searchString }
    })
  }

  render() {
    const { stadiums, searchString } = this.state
    const { onSearchChnage } = this

    const filteredStadiums = stadiums.filter((stadium) => {
      return (
        stadium.name.toLocaleLowerCase().includes(searchString) ||
        stadium.team.toLocaleLowerCase().includes(searchString)
      )
    })

    return (
      <div className='App'>
        <h1 className='title'>Stadium Rolodex</h1>
        <SearchBox
          className={'stadium-search-box'}
          onChangeHandler={onSearchChnage}
          placeholder={'Search stadiums'}
        />
        <CardList stadiums={filteredStadiums} />
      </div>
    )
  }
}

export default App
