import React from 'react'

import BackCard from '../../assets/backcard.svg'

// in Deck we want to create the starter and display the first 4 cards
// the 4 cards will be build from 3 Kings and only 1 Ace 
// click on card back card will open the 4 cards by position 0 -> 3
// click on 1 of them will flip the card is Ace you won else you lose
const Deck: React.FC = () => {

    const cards = ['A', 'K']
    const suits = ['H', 'C', 'D', 'S']

    
    const shuffleCards = () => {

    }

    return (
      <img src={BackCard} onClick={shuffleCards} />
    )
  }
  
  export default Deck