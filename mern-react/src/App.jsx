// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Components/Functionalcomponents/home.jsx'
import About from './Components/Functionalcomponents/about.jsx'
import Contact from './Components/Functionalcomponents/contact.jsx'
import Gallery from './Components/Functionalcomponents/gallery.jsx'
import Signup from './Components/Functionalcomponents/signup.jsx'
import Login from './Components/Functionalcomponents/login.jsx'
import Navbar from './Components/Functionalcomponents/navbar.jsx'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>

      {/* <Navbar /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home properties="Hello" sjit = "SJIT"/>}></Route>
          <Route path='/About' element = {<About/>}></Route>
          <Route path='/Contact' element = {<Contact/>}></Route>
          <Route path='/Gallery' element = {<Gallery/>}></Route>
          <Route path='/Signup' element = {<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
