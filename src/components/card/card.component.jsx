import { Component } from 'react'

import './card.styles.css'

class Card extends Component {
  render() {
    const { id, name, image, team } = this.props.stadium

    return (
      <div className='card' key={id}>
        <h3>{name}</h3>
        <div className='image' title={name}>
          <img alt={name} src={`/images/stadiums/${image}`} />
        </div>
        <p>{team}</p>
      </div>
    )
  }
}

export default Card
