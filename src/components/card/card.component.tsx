// import { Component } from 'react'
import { Stadium } from '../../App'

import './card.styles.css'

type CardProps = {
  stadium: Stadium
}

const Card = ({ stadium }: CardProps) => {
  const { name, image, team } = stadium

  return (
    <div className='card'>
      <h3>{name}</h3>
      <div className='image' title={name}>
        <img alt={name} src={`/images/stadiums/${image}`} />
      </div>
      <p>{team}</p>
    </div>
  )
}

// class Card extends Component {
//   render() {
//     const { id, name, image, team } = this.props.stadium

//     return (
//       <div className='card' key={id}>
//         <h3>{name}</h3>
//         <div className='image' title={name}>
//           <img alt={name} src={`/images/stadiums/${image}`} />
//         </div>
//         <p>{team}</p>
//       </div>
//     )
//   }
// }

export default Card
