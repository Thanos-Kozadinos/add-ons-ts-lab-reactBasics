import { FC, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IRandomUser, getRandomUser } from './api/api'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RandomUser from './Components/RandomUser'

const App:FC = () => {
  
 
  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<RandomUser />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
