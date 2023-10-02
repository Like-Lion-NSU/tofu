import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Testpage from './pages/Testpage'
import Resultpage from './pages/Resultpage'
import './App.css'

export default function App(){  // Main 화면
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/testpage' element={<Testpage/>}/>
        <Route path='/resultpage' element={<Resultpage/>}/>
      </Routes>
    </BrowserRouter>
  )
}