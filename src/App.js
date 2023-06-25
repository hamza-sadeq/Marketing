import React from 'react'
import './App.css'
import Home from './Components/Home'
import Services from './Components/Services'
import Works from './Components/Works'
import FunFacts from './Components/FunFacts'
import Companies from './Components/Companies'

const App = () => {
  return (
    <div>
      <Home />
      <Services />
      <Works />
      <FunFacts />
      <Companies />
    </div>
  )
}

export default App