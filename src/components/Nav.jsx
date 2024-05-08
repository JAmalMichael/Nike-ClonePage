import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants"; 
import { useState } from "react";
import { FaTimes } from 'react-icons/fa';


const Nav = () => {
  const [isShow, setIsShow] = useState(true)

  const handleClick = () => {
      setIsShow(!isShow);
  }

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block focus:outline-none cursor-pointer' onClick={handleClick}>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} 
          className={ isShow ? 'display-block' : ' ' }
          />
          <ul 
          className={`fixed top-0 left-0 w-full h-0 overflow-hidden transition duration-300
          ease-in-out bg-gray-300 z-50 
          ${!isShow ? 'h-full overflow-auto md:h-auto md:overflow-visible' : ''}`}>
          <FaTimes size={20} color="black" className="mx-auto mt-20"/>
          {navLinks.map((item) => (
            <li key={item.label} className="gap-10 mt-5 flex ">
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray mx-auto'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;