import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import LogoM from '../../public/img/Muslim1.png';
import { Link as ScrollLink } from 'react-scroll';  
import { BrowserRouter } from 'react-router-dom';

function NavbarMob() {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState('light');
  const element = document.documentElement;

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add("dark");
        break;
      case 'light':
        element.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [element.classList, theme]);

  const options = [
    { icon: "sunny", text: "light" },
    { icon: "moon", text: "dark" }
  ];

  const handleNav = () => {
    setNav(!nav);
  };
  
  return (
    <>
      <header className="bg-indigo-700 bg-opacity-5 text-black shadow-lg md:hidden">
        <div className="container mx-auto flex items-center justify-between h-24">
          <a href="" className="flex items-center justify-center">
            <img className="h-20 pt-3" src={LogoM} alt="" />
          </a>

          <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
        <BrowserRouter>
          <nav
            className={`${
              nav
                ? 'fixed left-0 top-24 font-semibold text-base lg:text-lg font-mono w-full h-full bg-white ease-in-out duration-500 z-50 overflow-y-auto'
                : 'ease-in-out fixed font-semibold text-base lg:text-lg font-mono top-24 w-full duration-500 hidden '
            }`}
          >
            <ul className="text-black p-4">
              <li>
                <ScrollLink className='py-2 border-b hover:text-amber-600 cursor-pointer' to='home' spy={true} smooth={true} duration={500}>
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink className='py-2 border-b hover:text-amber-600 cursor-pointer' to='about' spy={true} smooth={true} duration={500}>
                  About
                </ScrollLink>
              </li>
            </ul>

            <div className="flex justify-end p-4">
              {options.map(opt => (
                <button 
                  key={opt.text} 
                  onClick={() => setTheme(opt.text)}
                  className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && "text-sky-600"}`}
                >
                  <ion-icon name={opt.icon}></ion-icon>
                </button>
              ))}
            </div>
          </nav>
        </BrowserRouter>
      </header>
    </>
  );
}

export default NavbarMob; 
