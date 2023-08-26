'use client'
import { useState } from 'react';
import cart from '../../../public/cart.svg';
import Image from 'next/image';

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <nav className='navbar'>
      <button onClick={toggle} className='button'>&#61;</button>

      <h1>LOGO</h1>

      <button className='button'><Image className='svg-size-md' src={cart} alt="React Logo" /></button>

    </nav>
  );
}

export default Navbar;