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
import UseEffectAPI from './Components/Hooks/useEffectapi.jsx'
import UseEffect from './Components/Hooks/useeffect.jsx'
import UseState from './Components/Hooks/usestate.jsx'
import UseRef from './Components/Hooks/useRef.jsx'
import UseMemo from './Components/Hooks/usememo.jsx'
import UseCallBack from './Components/Hooks/usecallback.jsx'
import UseMemoize from './Components/Hooks/usememoize.jsx'
import HoC from './Components/Hooks/Hoc/HoC.jsx'
import Memo from './Components/Memoization/memo.jsx'
import LazyLoading from './Components/Memoization/lazyloading.jsx'
import CoE from './Components/ContextAPI/CoE.jsx'

import {BrowserRouter,Routes,Route, Form} from 'react-router-dom'
import StudentResults from './Components/ContextAPI/Student.jsx'
// import UseEffectAPI from './Components/Hooks/useEffectapi.jsx'

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
          <Route path='/UseEffectAPI' element = {<UseEffectAPI/>}></Route>
          <Route path='/Signup' element = {<Signup/>}></Route>
          <Route path='/login' element = {<Login />}></Route>
          <Route path='/UseEffect' element = {<UseEffect />}></Route>
          <Route path='/UseState' element = {<UseState />}></Route>
          <Route path='/UseRef' element = {<UseRef />}></Route>
          <Route path='/UseMemo' element = {<UseMemo />}></Route>
          <Route path='/UseCallBack' element = {<UseCallBack />}></Route>
          <Route path='/UseMemoize' element = {<UseMemoize />}></Route>
          <Route path='/HoC' element = {<HoC />}></Route>
          <Route path='/Memo' element = {<Memo />}></Route>
          <Route path='/LazyLoading' element = {<LazyLoading />}></Route>
          <Route path='/CoE' element = {<CoE />}></Route>

        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
