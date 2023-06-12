import React, {useState} from 'react'

import useStyles from './DeckStyles'
import BC from '../../assets/cardsSvgs/BC.svg'
import AD from '../../assets/cardsSvgs/AD.svg'
import Card from '../Cards/Card'

// in Deck we want to create the starter and display the first 4 cards
// the 4 cards will be build from 3 Kings and only 1 Ace 
// click on card back card will open the 4 cards by position 0 -> 3
// click on 1 of them will flip the card is Ace you won else you lose
const Deck: React.FC = () => {
    const classes = useStyles() 

    const ranks = ['A', 'K']
    const suits = ['H', 'C', 'D', 'S']

    const [cards, setCards] = useState<string[]>(['AD', 'KC', 'AH'])

    let currentIndex = cards.length;
    let randomIndex;

    const shuffle = (array: string[]) => {
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]]
        }

        console.log(array);
        
        return array
    }

    const [isShowCards, setIsShowCards] = useState<boolean>(false)
    
    return (
        <>
            <img src={BC} className={classes.backCard} onClick={() => {setIsShowCards(true); setCards(shuffle(cards))}}/> 
            {
                isShowCards && 
                cards.map(deckCard => <Card key={deckCard} value={deckCard}/>) 
            }
        </>
    )
  }
  
  export default Deck