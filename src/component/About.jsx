import { useState, useEffect } from 'react';
import LogoM from '../../public/img/Muslim1.png';


function About() {

  // use it  for showing button to go top up
  const [showButton, setShowButton] = useState(false);

  // use it case of mobile device 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="about" className=" bg-indigo-800 bg-opacity-5 rounded-lg shadow-md mr-2 ml-2 dark:bg-slate-900">
      <div className="w-full max-w-screen-xl mx-auto p-1 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="" className="flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={LogoM} className="h-32" alt="" />
          </a>
        </div>

        <hr className="my-6 border-dark sm:mx-auto dark:border-white lg:my-8" />

        {window.scrollY > 50
          ? <span className="block text-base text-gray-900 sm:text-center dark:text-white">
            Copyright © 2024 Built with ❤️ by <strong>Salima D.</strong>
          </span>
          : <span className="block text-base text-black text-center sm:text-center dark:text-white">
            Copyright © 2024 Built with ❤️ by <strong>Salima D.</strong>
          </span>
        }

        {showButton && (
          <button
            className={`fixed bottom-5 right-5 bg-blue-900 text-white px-3 py-2 rounded-full hover:bg-blue-600 flex items-center justify-center focus:outline-none focus:ring focus:border-blue-300 transition duration-300 sm:px-3 sm:py-2 sm:bottom-3`}
            onClick={handleClick}
          >
            <ion-icon name="arrow-up-circle-outline" className="text-xl" />
          </button>
        )}


      </div>
    </div>

  );
}

export default About;
