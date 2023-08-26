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

      {/* NAVBAR PARA MOVIL */}
      <ul className={open ? 'nav-menu' : 'disable'}>
        <li>Home</li>
        <li>Favotiros</li>
        <li>Iniciar Sesión</li>
        <li>Sobre nosotros</li>
      </ul>

      <div className='navbar__menu'>
        {open ?
          (<button onClick={toggle} className='button'>&times;</button>)
          :
          (<button onClick={toggle} className='button'>&#61;</button>)
        }
      </div>

      <h1>LOGO</h1>

      <ul className='nav-menu-pc'>
        <li>Home</li>
        <li>Favotiros</li>
        <li>Iniciar Sesión</li>
        <li>Sobre nosotros</li>
      </ul>


      <button className='button'><Image className='svg-size-md' src={cart} alt="React Logo" /></button>

    </nav>
  );
}

export default Navbar;