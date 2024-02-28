import { useEffect, useState } from 'react';
import LogoM from '../../public/img/Muslim1.png';
import { Link as ScrollLink } from 'react-scroll';  
import { BrowserRouter } from 'react-router-dom';
import NavbarMob from './NavbarMob';

function NavbarDesk() {

  
  const [theme,setTheme] = useState('light');
  const element =document.documentElement
  
   useEffect(()=>{
     switch(theme){
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

  return (
    < div >
      <header className="bg-indigo-700 bg-opacity-5 text-black shadow-lg hidden md:block" >
        <div className="container mx-auto flex items-center h-24">
          <img className="h-40 pt-3" src={LogoM} alt="" />
          <BrowserRouter>
            <nav className="contents font-semibold text-base lg:text-lg font-mono">
              <ul className="mx-auto flex items-center">
                <li className='p-1 hover:text-amber-600 rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
                  <ScrollLink className='nav-link js-scroll' to='home' spy={true} smooth={true} duration={500}>
                    Home
                  </ScrollLink>
                </li>
                <li className='p-1 hover:text-amber-600 rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
                  <ScrollLink className='nav-link js-scroll' to='about' spy={true} smooth={true} duration={500}>
                    About
                  </ScrollLink>
                </li>
              </ul>

              <div className="top-5 right-12 duration-100 dark:bg-slate-800  rounded">
                {options?.map(opt => (
                  <button 
                  key={opt.text} 
                  onClick={()=> 
                    setTheme(opt.text) 

                  }
                  className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme == opt.text && "text-sky-600"}`}>
                    <ion-icon name={opt.icon}></ion-icon>
                  </button>
                ))}
              </div>
            </nav>
          </BrowserRouter>
        </div>
      </header>
      <NavbarMob/>
      
    </div>
  );
}

export default NavbarDesk;