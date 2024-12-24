import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCounter] =useState(15)
// let counter=15
const addVal=()=> {
  counter +=1
  setCounter(counter)
  console.log('counter value', {counter})
}

const decVal =() =>{
  counter -= 1
  setCounter(counter)
  console.log('counter value', {counter})
}
  return (
    <>
     <h1>React</h1> 
     <h2>Counter value: {counter}</h2>
     <button onClick={addVal}>Increase value: {counter}</button>
     <br />
     <button onClick={decVal}>Decrease value: {counter}</button>
    </>
  )
}

export default App
