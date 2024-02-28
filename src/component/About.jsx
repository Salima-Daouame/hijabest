/* eslint-disable no-unused-vars */
import React from 'react'
import LogoM1 from '../../public/img/Muslim1.png';


function About() {
  return (
    <div id="about" className="rounded-lg shadow dark:bg-gray-900 m-4 bg-indigo-700 bg-opacity-5" >

      <div className="w-full max-w-screen-xl mx-auto p-1 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="" className="flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={LogoM1} className="h-20" alt="Flowbite Logo" />
          </a>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {window.scrollY > 50
       ?
          <span className="block text-base text-gray-900 sm:text-center dark:text-gray-900">Copyright © 2024 Built with ❤️ by
            <strong> Salima D. </strong>.</span>
          :
          <span className="block text-base text-gray-900 text-center sm:text-center dark:text-gray-900">
            Copyright © 2024 Built with ❤️ by <strong>Salima D.</strong>
          </span>
        }
        

      </div>
    </div>
  )
}

export default About;
