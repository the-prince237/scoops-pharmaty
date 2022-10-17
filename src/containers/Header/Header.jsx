import React from 'react'
import styled from 'styled-components'
import './Header.css'

import { BiPhone } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <img src="" alt="scoops-pharmacy" />
      <nav className='large-nav'>
        <ul>
          <li><a className='nav-link' href="#mission">Mission</a></li>
          <li><a className='nav-link' href="#specialities">Spécialités</a></li>
          <li><a className='nav-link' href="#products">Produits</a></li>
          <li><a className='nav-link' href="#testimonials">Témoignages</a></li>
        </ul>
      </nav>
      <div className='header-buttons'>
        <span className='whatsap'><BsWhatsapp /> whatsapp</span>
        <span className='telephone'><BiPhone /> 6 55 06 18 36</span>
      </div>
      <div className='toggle-menu'>
        <div className='nav-button'></div>
        <nav id='small-nav'>
          <ul>
            <li><a href="#mission">Mission</a></li>
            <li><a href="#specialities">Spécialités</a></li>
            <li><a href="#products">Produits fars</a></li>
            <li><a href="#testimonials">Témoignages</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
