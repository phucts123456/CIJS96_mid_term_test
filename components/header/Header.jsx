import React from 'react'
import './Header.css'
import NavBar from './NavBar'
import SearchBar from './SearchBar'
const Header = () => {
  return (
    <div className='header_container'>
      <h2 className='header_title'>Anonime</h2>
      <NavBar/>
      <SearchBar/>
    </div>
  )
}

export default Header
