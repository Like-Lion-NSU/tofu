import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Testpage from './pages/Testpage'
import Resultpage from './pages/Resultpage'
import './App.css'
import Rankingpage from './pages/Rankingpage'

export default function App(){  // Main 화면
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/question' element={<Testpage/>}/>
        <Route path='/tofumbti' element={<Resultpage/>}/>
        <Route path='/tofurank' element={<Rankingpage/>}/>
      </Routes>
    </BrowserRouter>
  )
}