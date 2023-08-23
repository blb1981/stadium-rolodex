// import { Component } from 'react'

import Card from '../card/card.component'

import { Stadium } from '../../App'
import './card-list.styles.css'

type CardListProps = {
  stadiums: Stadium[]
}

const CardList = ({ stadiums }: CardListProps) => {
  return (
    <>
      <div className='card-container'>
        {stadiums.map((stadium) => {
          return <Card key={stadium.id} stadium={stadium} />
        })}
      </div>
    </>
  )
}

// class CardList extends Component {
//   render() {
//     const { stadiums } = this.props

//     return (
//       <>
//         <div className='card-container'>
//           {stadiums.map((stadium) => {
//             return <Card stadium={stadium} />
//           })}
//         </div>
//       </>
//     )
//   }
// }

export default CardList
