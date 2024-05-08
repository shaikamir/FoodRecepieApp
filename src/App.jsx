import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Module/Home/Home';
import Favourites from './Module/Favourites/Favourites';
import Details from './Module/Details/Details';


function App() {

  return (
    <div className='min-h-screen text-lg text-gray-600'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/favourites' element={<Favourites/>}></Route>
        <Route path='/recipieItem/:id' element={<Details/>}></Route>
      </Routes>
    </div>
  )
}

export default App
