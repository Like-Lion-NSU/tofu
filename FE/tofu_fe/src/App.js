import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Testpage from './pages/Testpage'

export default function App(){  // Main 화면
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
        <Route path='/testpage' element={<Testpage/>}/>
      </Routes>
    </BrowserRouter>
  )
}