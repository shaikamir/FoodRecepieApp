import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContextu } from './Module/Context/Contextu'

const Navbar = () => {
  // const [inputValue, setInputValue] = useState("");

  const {inputValue, setInputValue, fnClick} = useContext(GlobalContextu);

  console.log("inputMaaa", inputValue)

  return (
    <nav className='flex justify-between items-center py-4 w-full'>
      <h2 className='text-2xl font-semibold'>Food Recipe</h2>
      <form onSubmit={fnClick}>
        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} placeholder='Enter items...' className='bg-white/75 px-3 p-3 shadow-lg rounded-full shadow-red focus: shadow-red-200' />
      </form>
      <ul className='flex'>
        <li>
          <NavLink to={'/'} className="font-semibold hover:underline mx-2">Home</NavLink>
        </li>
        <li>
          <NavLink to={'/favourites'} className="font-semibold hover:underline mx-2">Favourites</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar