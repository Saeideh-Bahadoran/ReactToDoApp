
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'

import "./App.css";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0)
// comment 
  return (
    
      <div>
       
        <Navbar/>

        <Footer />

      </div>
  )
}

export default App
