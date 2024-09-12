import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Counter } from "./components/Counter.jsx"
import { Counter2 } from "./components/Counter2.jsx"
import { Discount } from "./components/Discount.jsx"

function App() {
  

  return (
    <>
      <h1 className="logo">
        Counter
      </h1>
      <div>
      <Counter></Counter>
      <Counter2></Counter2>
      <Discount></Discount>
      </div>
    </>
  )
}

export default App
