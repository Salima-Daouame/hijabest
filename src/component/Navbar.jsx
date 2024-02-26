/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import LogoM from '../../public/img/Muslim1.png';

function Navbar() {
  const options = [
    { icon: "sunny", 
    text: "light" 
    },
    { icon: "moon",
     text: "dark" 
    }
  ];

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Message' },
    { id: 3, text: 'About' },
  ];

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <header className="bg-indigo-700 bg-opacity-5 text-black shadow-lg hidden md:block">
        <div className="container mx-auto flex items-center h-24">
          {/* <a href="" className="flex items-center justify-center"> */}
            <img className="h-40 pt-3" src={LogoM} alt="" />
      

          <nav className="contents font-semibold text-base lg:text-lg font-mono">
            <ul className="mx-auto flex items-center">
              {navItems.map(item => (
                <li
                  key={item.id}
                  className='p-1 hover:text-amber-600 rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                >
                  {item.text}
                </li>
              ))}
            </ul>

            <div className="top-5 right-12 duration-100 dark:bg-slate-700 bg-gray-100 rounded">
              {options.map(opt => (
                <button key={opt.text} className="w-8 h-8 leading-9 text-xl rounded-full m-1 text-sky-600">
                  <ion-icon name={opt.icon}></ion-icon>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <header className="bg-indigo-700 bg-opacity-5 text-black shadow-lg md:hidden">
        <div className="container mx-auto flex items-center justify-between h-24">
          <a href="" className="flex items-center justify-center">
            <img className="h-20 pt-3" src={LogoM} alt="" />
          </a>

          <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>

        <nav
          className={`${
            nav
              ? 'fixed left-0 top-24 font-semibold text-base lg:text-lg font-mono w-full h-full bg-[#FFF] ease-in-out duration-500'
              : 'ease-in-out fixed  font-semibold text-base lg:text-lg font-monotop-24 w-full duration-500 hidden '
          }`}
        >
          <ul className="text-black p-4">
            {navItems.map(item => (
              <li
                key={item.id}
                className='py-2 border-b hover:text-amber-600 cursor-pointer'
              >
                {item.text}
              </li>
            ))}
          </ul>

          <div className="flex justify-end p-4">
            {options.map(opt => (
              <button key={opt.text} className="w-8 h-8 leading-9 text-xl rounded-full m-1 text-black">
                <ion-icon name={opt.icon}></ion-icon>
              </button>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;

