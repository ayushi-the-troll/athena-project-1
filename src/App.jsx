import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>hi, i'm ayushi 👋</h1>
      <p>currently a student at mills high, aspiring to be an electrical engineer.</p>
      <h3>stuff i've done:</h3>
      <ul>
        <li>organizer for <a>aurora in sf</a> (coming soon!)</li>
        <li>published seven poems in my school's <a>lit magazine</a> </li>
        <li>electrical lead at <a>boba bots</a> </li>
        <li>attended 2024 <a>gwc sip</a> </li>
      </ul>
      <h3>contact me at:</h3>
      <p>aayushiswami08@gmail.com</p>
    </div>
  )
}

export default App
