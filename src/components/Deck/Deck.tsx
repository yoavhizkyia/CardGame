import React, {useState, useEffect} from 'react'

import useStyles from './DeckStyles'
import BC from '../../assets/cardsSvgs/BC.svg'
import Card from '../Cards/Card'
import { shuffle } from 'lodash'

// in Deck we want to create the starter and display the first 4 cards
// the 4 cards will be build from 3 Kings and only 1 Ace 
// click on card back card will open the 4 cards by position 0 -> 3
// click on 1 of them will flip the card is Ace you won else you lose
const Deck: React.FC = () => {
    const classes = useStyles() 

    const ranks = ['A', 'K']
    const suits = ['H', 'C', 'D', 'S']

    const [cards, setCards] = useState<string[]>(['KS', 'AH', 'KC'])
    const [isShowCards, setIsShowCards] = useState<boolean>(false)

    const handleOnClick =() => {
        setIsShowCards(true);  
        setCards(prev=> shuffle(prev));
    }
    
    return (
        <>
            <img src={BC} className={classes.backCard} onClick={handleOnClick}/> 
            {
                isShowCards && 
                cards.map(deckCard => (<Card key={deckCard} value={deckCard}/>)) 
            }
        </>
    )
  }
  
  export default Deck