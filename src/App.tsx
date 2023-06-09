import { useState } from 'react'
import './App.css'
import Card from './components/Cards/Card'
import Deck from './components/Deck/Deck'

const App = () => {
  return <>
  <Deck />
  <Card value={'AD'} />
  </>
}

export default App
