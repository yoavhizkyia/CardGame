import React from 'react'

interface CardPrpos {
  value?: string
}

const Card: React.FC<CardPrpos> = (props: CardPrpos) => {

  const {value} = props   

    return (
      <img src={`src/assets/cardsSvgs/${value}.svg`} />
    )
  }
  
  export default Card