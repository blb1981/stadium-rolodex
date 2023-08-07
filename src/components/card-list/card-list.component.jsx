import { Component } from 'react'

import Card from '../card/card.component'
import './card-list.styles.css'

class CardList extends Component {
  render() {
    const { stadiums } = this.props

    return (
      <>
        <div className='card-container'>
          {stadiums.map((stadium) => {
            return <Card stadium={stadium} />
          })}
        </div>
      </>
    )
  }
}

export default CardList
