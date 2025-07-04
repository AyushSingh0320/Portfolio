import { useState } from 'react';
// import react from 'react';
const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative sm:px-36 px-6 py-2.5 flex flex-col gap-5 justify-between md:flex-row text-secondary bg-gray-200 dark:bg-gray-900 dark:text-white">

      <div className="flex flex-col items-center font-semibold text-[17px]">
        <p>Designed & Developed by</p>
        <div className="flex gap-1 items-center">
          <p>&nbsp;Ayush Singh</p> <img src={`☺️`} width={20} height={20} className="object-contain"/> <p>2025</p>
        </div>
      </div>

      {/* Hamburger for social links on mobile */}
      <div className="flex md:hidden justify-center">
        <button
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="footer-social-menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Open social links</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {menuOpen && (
          <div id="footer-social-menu" className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-200 dark:bg-gray-900 rounded shadow-lg py-2 px-4 flex flex-col gap-2 z-50">
            <a href="https://github.com/Ayushsingh0320" target="_blank" rel="noreferrer" className="hover:text-blue-600 font-semibold">GITHUB</a>
            <a href="" target="_blank" rel="noreferrer" className="hover:text-blue-600 font-semibold">LINKEDIN</a>
          </div>
        )}
      </div>

      <div className="gap-5 font-semibold tracking-wide hidden md:flex ">

        <div className="group flex flex-col justify-center cursor-pointer  hover:text-blue-600">
          <a href="https://github.com/Ayushsingh0320" target="_blank" rel="noreferrer">GITHUB</a>
          <div className="h-[1.5px] w-auto bg-secondary opacity-0 -translate-y-1
          transition-all
          duration-300
          group-hover:opacity-100 
          group-hover:translate-y-0"></div>
        </div>
        <div className="group flex flex-col justify-center cursor-pointer hover:text-blue-600 ">
          <a href="" target="_blank" rel="noreferrer">LINKEDIN</a>
          <div className="h-[1.5px] w-auto bg-secondary opacity-0 -translate-y-1
          transition-all
          duration-300
          group-hover:opacity-100 
          group-hover:translate-y-0"></div>
        </div>
      </div>


    </div>
  )
}

export default Footer