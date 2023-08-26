import cart from '../../../public/cart.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <button className='button'>&#61;</button>

      <h1>LOGO</h1>

      <button className='button'><Image className='svg-size-md' src={cart} alt="React Logo" /></button>

    </nav>
  );
}

export default Navbar;