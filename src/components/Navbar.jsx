import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'

function Navbar() {
  return (
    <div className='flex flex-row gap-10 items-center justify-center

'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/pastes'>Pastes</NavLink>
    </div>
    
  )
}

export default Navbar
