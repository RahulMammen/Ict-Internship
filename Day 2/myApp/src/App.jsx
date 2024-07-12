import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import View from './Components/View'
import Records from './Components/Records'
import {Routes,Route} from 'react-router-dom'
import Add from './Components/Add'
import Demoaxios from './Components/Demoaxios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to React Session</h1>
      <View/>
      <Routes>
        <Route path="/" element={<Demoaxios/>}></Route>
        <Route path="/add" element={<Add person={{
                fname:"Swathi",department:"English Literature",semester:"s4"}}/>}></Route>
      
      </Routes>
    </>
  )
}

export default App
