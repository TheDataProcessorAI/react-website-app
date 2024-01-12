import React, {useState} from 'react';
// import { Link, animateScroll as scroll, } from 'react-scroll'
import { Link } from 'react-router-dom';


import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    
    const handleClick = () => setNav(!nav)

    const handleClose =()=> setNav(false)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 top-0 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <Link to="/">
          <h1 className='text-indigo-600 text-3xl font-bold mr-4 sm:text-4xl'>Data Proc AI.</h1>
          </Link>
          <ul className='hidden md:flex'>
          <li><Link to="/" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li><Link to="services" smooth={true} offset={-100} duration={500}>Services</Link></li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <Link to="contact" smooth={true} duration={500}>
            <button className="px-8 py-3">Talk To Us</button>
        </Link>
        </div>
        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-5' /> : <XIcon className='w-5' />}
          
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="/" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="services" smooth={true} offset={-100} duration={500}>Services</Link></li>
       </ul>
    </div>
  );
};

export default Navbar;
